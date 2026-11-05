# Local fork of https://explorer.imd.fun/
# Serves downloaded pages and images. Missing routes proxy to the live site.
param(
  [int]$Port = 8080
)

$ErrorActionPreference = "Stop"
$Root = $PSScriptRoot
$Origin = "https://explorer.imd.fun"
$Curl = "C:\WINDOWS\system32\curl.exe"

$Mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".gif"  = "image/gif"
  ".webp" = "image/webp"
  ".ico"  = "image/x-icon"
  ".woff2"= "font/woff2"
  ".woff" = "font/woff"
  ".txt"  = "text/plain; charset=utf-8"
  ".md"   = "text/markdown; charset=utf-8"
  ".bin"  = "application/octet-stream"
}

function Get-ArtifactFile([string]$Hash) {
  $dir = Join-Path $Root "artifacts"
  foreach ($ext in @(".jpg", ".png", ".gif", ".webp", ".svg", ".json", ".md", ".bin")) {
    $p = Join-Path $dir ($Hash + $ext)
    if (Test-Path $p) { return $p }
  }
  Get-ChildItem -Path $dir -Filter ($Hash + ".*") -ErrorAction SilentlyContinue |
    Select-Object -First 1 |
    ForEach-Object { $_.FullName }
}

function Save-Artifact([string]$Hash) {
  $dir = Join-Path $Root "artifacts"
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }
  $tmp = Join-Path $dir ($Hash + ".tmp")
  foreach ($url in @("https://api.imd.fun/artifacts/$Hash", "https://api-imd.up.railway.app/artifacts/$Hash")) {
    & $Curl -fsSL --retry 2 -o $tmp $url
    if ($LASTEXITCODE -eq 0 -and (Test-Path $tmp) -and ((Get-Item $tmp).Length -gt 32)) {
      $bytes = [IO.File]::ReadAllBytes($tmp)
      $ext = ".bin"
      if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8) { $ext = ".jpg" }
      elseif ($bytes.Length -ge 8 -and $bytes[0] -eq 0x89 -and $bytes[1] -eq 0x50) { $ext = ".png" }
      elseif ($bytes.Length -ge 1 -and $bytes[0] -eq 0x7B) { $ext = ".json" }
      elseif ($bytes.Length -ge 1 -and $bytes[0] -eq 0x23) { $ext = ".md" }
      $dest = Join-Path $dir ($Hash + $ext)
      Move-Item $tmp $dest -Force
      return $dest
    }
  }
  if (Test-Path $tmp) { Remove-Item $tmp -Force }
  return $null
}

function Rewrite-ForkHtml([string]$html) {
  $map = @{}
  $artDir = Join-Path $Root "artifacts"
  if (Test-Path $artDir) {
    Get-ChildItem $artDir -File | ForEach-Object { $map[$_.BaseName] = "/artifacts/$($_.Name)" }
  }
  $t = $html
  $t = [regex]::Replace($t, '/_next/image\?url=https(?:%3A%2F%2F|://)(?:api\.imd\.fun|api-imd\.up\.railway\.app)(?:%2F|/)artifacts(?:%2F|/)([a-f0-9]{64})(?:&amp;|&)w=\d+(?:&amp;|&)q=\d+', {
    param($m)
    $h = $m.Groups[1].Value
    if ($map.ContainsKey($h)) { $map[$h] } else { "/artifacts/$h.jpg" }
  })
  $t = [regex]::Replace($t, 'https://(?:api\.imd\.fun|api-imd\.up\.railway\.app)/artifacts/([a-f0-9]{64})', {
    param($m)
    $h = $m.Groups[1].Value
    if ($map.ContainsKey($h)) { $map[$h] } else { "/artifacts/$h.jpg" }
  })
  $t = [regex]::Replace($t, '/artifacts/([a-f0-9]{64})(?!\.[A-Za-z0-9]+)', {
    param($m)
    $h = $m.Groups[1].Value
    if ($map.ContainsKey($h)) { $map[$h] } else { "/artifacts/$h.jpg" }
  })
  $t = $t.Replace('/favicon.ico?favicon.1qkvr9pvz1au-.ico', '/favicon.ico')
  $t = $t.Replace('/icon.svg?icon.0xebx5em5j_82.svg', '/icon.svg')
  $t = $t.Replace('/apple-icon.png?apple-icon.076xsyobkyj9y.png', '/apple-icon.png')
  $t = [regex]::Replace($t, 'href="/\?page=(\d+)"', 'href="/page/$1/"')
  $t = [regex]::Replace($t, 'href="/tokens\?page=(\d+)"', 'href="/tokens/page/$1/"')
  $t = [regex]::Replace($t, 'href="/agents\?page=(\d+)"', 'href="/agents/page/$1/"')
  $t = [regex]::Replace($t, 'href="/oracle\?page=(\d+)"', 'href="/oracle/page/$1/"')
  $t = [regex]::Replace($t, 'href="/\?type=companies&amp;page=(\d+)"', 'href="/companies/page/$1/"')
  $t = [regex]::Replace($t, 'href="/\?type=parts&amp;page=(\d+)"', 'href="/parts/page/$1/"')
  $t = $t.Replace('href="/page/1/"', 'href="/"')
  $t = $t.Replace('href="/tokens/page/1/"', 'href="/tokens/"')
  $t = $t.Replace('href="/agents/page/1/"', 'href="/agents/"')
  $t = $t.Replace('href="/oracle/page/1/"', 'href="/oracle/"')
  $t = $t.Replace('href="/companies/page/1/"', 'href="/companies/"')
  $t = $t.Replace('href="/parts/page/1/"', 'href="/parts/"')
  if ($t -notmatch 'imd-pager\.js') {
    $t = $t.Replace('</head>', '<script src="/imd-pager.js?v=nostake"></script></head>')
  }
  $t = Remove-StakeFeedRows $t
  return $t
}

function Test-StakeText([string]$text) {
  return [regex]::IsMatch($text, '(?i)(?<!mi)(?:un)?stak(?:e|ed|es|ing|er|ers)')
}

function Remove-StakeFeedRows([string]$html) {
  $marker = 'class="feed-row'
  $idx = $html.IndexOf($marker)
  if ($idx -lt 0) { return $html }
  $sb = New-Object System.Text.StringBuilder
  $i = 0
  while ($true) {
    $idx = $html.IndexOf($marker, $i)
    if ($idx -lt 0) {
      [void]$sb.Append($html.Substring($i))
      break
    }
    $open = $html.LastIndexOf('<div', $idx)
    if ($open -lt $i) {
      [void]$sb.Append($html.Substring($i, $idx + $marker.Length - $i))
      $i = $idx + $marker.Length
      continue
    }
    [void]$sb.Append($html.Substring($i, $open - $i))
    $depth = 0
    $j = $open
    $end = $html.Length
    while ($j -lt $html.Length) {
      $nextOpen = $html.IndexOf('<div', $j)
      $nextClose = $html.IndexOf('</div>', $j)
      if ($nextClose -lt 0) { break }
      if ($nextOpen -ge 0 -and $nextOpen -lt $nextClose) {
        $depth++
        $j = $nextOpen + 4
      } else {
        $depth--
        $j = $nextClose + 6
        if ($depth -eq 0) { $end = $j; break }
      }
    }
    $block = $html.Substring($open, $end - $open)
    if (-not (Test-StakeText $block)) {
      [void]$sb.Append($block)
    }
    $i = $end
  }
  return $sb.ToString()
}

function Save-PagedHtml([string]$section, [int]$page) {
  if ($page -lt 2) { return $null }
  $relDir = if ($section -eq "jobs") { "page\$page" } else { "$section\page\$page" }
  $dest = Join-Path $Root "$relDir\index.html"
  if (Test-Path $dest) { return $dest }
  $live = switch ($section) {
    "jobs" { "$Origin/?page=$page" }
    "companies" { "$Origin/?type=companies&page=$page" }
    "parts" { "$Origin/?type=parts&page=$page" }
    default { "$Origin/${section}?page=$page" }
  }
  $dir = Split-Path $dest -Parent
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
  $tmp = "$dest.tmp"
  & $Curl -fsSL --retry 2 --compressed -A "Mozilla/5.0" -o $tmp $live
  if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp) -or ((Get-Item $tmp).Length -lt 1000)) {
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
    return $null
  }
  $html = Rewrite-ForkHtml ([IO.File]::ReadAllText($tmp))
  [IO.File]::WriteAllText($dest, $html)
  Remove-Item $tmp -Force
  [regex]::Matches($html, 'artifacts(?:/|%2F)([a-f0-9]{64})') | ForEach-Object {
    $h = $_.Groups[1].Value
    if (-not (Get-ArtifactFile $h)) { Save-Artifact $h | Out-Null }
  }
  return $dest
}

function Resolve-Local([string]$Path, [string]$Query) {
  $page = 0
  if ($Query -match "page=(\d+)") { $page = [int]$Matches[1] }
  elseif ($Path -match "(?:^|/)page/(\d+)/?$") { $page = [int]$Matches[1] }

  $section = $null
  if ($Query -match "type=companies" -or $Path -match "^/companies") { $section = "companies" }
  elseif ($Query -match "type=parts" -or $Path -match "^/parts") { $section = "parts" }
  elseif ($Path -match "^/tokens") { $section = "tokens" }
  elseif ($Path -match "^/agents") { $section = "agents" }
  elseif ($Path -match "^/oracle") { $section = "oracle" }
  elseif ($Path -eq "/" -or $Path -match "^/page/") { $section = "jobs" }

  if ($section -and $page -ge 2) {
    $rel = if ($section -eq "jobs") { "page\$page\index.html" } else { "$section\page\$page\index.html" }
    $p = Join-Path $Root $rel
    if (Test-Path $p) { return $p }
    return (Save-PagedHtml $section $page)
  }

  $rel = [Uri]::UnescapeDataString($Path.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  if ($Path -eq "/" -and $Query -match "type=companies") {
    $p = Join-Path $Root "companies\index.html"
    if (Test-Path $p) { return $p }
  }
  if ($Path -eq "/" -and $Query -match "type=parts") {
    $p = Join-Path $Root "parts\index.html"
    if (Test-Path $p) { return $p }
  }
  foreach ($c in @(
      (Join-Path $Root $rel),
      (Join-Path $Root ($rel + ".html")),
      (Join-Path $Root ($rel.TrimEnd("/\") + "\index.html"))
    )) {
    if (Test-Path $c -PathType Leaf) { return $c }
  }
  return $null
}

function Read-HttpRequest($stream) {
  $ms = New-Object System.IO.MemoryStream
  $buf = New-Object byte[] 4096
  while ($true) {
    $n = $stream.Read($buf, 0, $buf.Length)
    if ($n -le 0) { break }
    $ms.Write($buf, 0, $n)
    $soFar = $ms.ToArray()
    $text = [Text.Encoding]::ASCII.GetString($soFar)
    if ($text.Contains("`r`n`r`n")) { break }
    if ($ms.Length -gt 1024 * 64) { break }
  }
  $raw = [Text.Encoding]::ASCII.GetString($ms.ToArray())
  $parts = $raw -split "`r`n`r`n", 2
  $head = $parts[0] -split "`r`n"
  if ($head.Count -lt 1) { return $null }
  $reqLine = $head[0] -split " "
  return @{
    Method = $reqLine[0]
    RawUrl = $reqLine[1]
  }
}

function Write-Http($stream, [int]$status, [string]$reason, [string]$type, [byte[]]$body) {
  if (-not $body) { $body = [byte[]]@() }
  $cache = if ($type -like "text/html*" -or $type -like "*javascript*") { "no-store" } else { "public, max-age=3600" }
  $header = "HTTP/1.1 $status $reason`r`nContent-Type: $type`r`nContent-Length: $($body.Length)`r`nConnection: close`r`nCache-Control: $cache`r`n`r`n"
  $hb = [Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($hb, 0, $hb.Length)
  if ($body.Length -gt 0) { $stream.Write($body, 0, $body.Length) }
}

function Get-FileBytes([string]$file) {
  $ext = [IO.Path]::GetExtension($file).ToLowerInvariant()
  $type = $Mime[$ext]
  if (-not $type) { $type = "application/octet-stream" }
  return @{ Type = $type; Bytes = [IO.File]::ReadAllBytes($file) }
}

function Get-Proxy([string]$rawUrl) {
  $tmp = [IO.Path]::GetTempFileName()
  try {
    & $Curl -fsSL --retry 2 -o $tmp ($Origin + $rawUrl)
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path $tmp)) { return $null }
    $bytes = [IO.File]::ReadAllBytes($tmp)
    $type = "application/octet-stream"
    if ($rawUrl -match "\.css(\?|$)") { $type = "text/css" }
    elseif ($rawUrl -match "\.js(\?|$)") { $type = "application/javascript" }
    elseif ($rawUrl -match "\.json(\?|$)" -or $rawUrl.StartsWith("/api/")) { $type = "application/json" }
    elseif ($rawUrl -match "\.png") { $type = "image/png" }
    elseif ($rawUrl -match "\.svg") { $type = "image/svg+xml" }
    elseif ($rawUrl -match "\.woff2") { $type = "font/woff2" }
    elseif ($bytes.Length -ge 15) {
      $head = [Text.Encoding]::ASCII.GetString($bytes[0..14])
      if ($head.StartsWith("<!DOCTYPE") -or $head.StartsWith("<html") -or $head.StartsWith("<!doctype")) {
        $type = "text/html; charset=utf-8"
      }
    }
    return @{ Type = $type; Bytes = $bytes }
  } finally {
    if (Test-Path $tmp) { Remove-Item $tmp -Force }
  }
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()
Write-Host "IMD Explorer fork running at http://127.0.0.1:$Port/"
Write-Host "Local files first; missing routes proxy to $Origin"
Write-Host "Press Ctrl+C to stop."

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $stream.ReadTimeout = 15000
      $stream.WriteTimeout = 15000
      $req = Read-HttpRequest $stream
      if (-not $req -or -not $req.RawUrl) {
        Write-Http $stream 400 "Bad Request" "text/plain" ([Text.Encoding]::UTF8.GetBytes("bad request"))
        continue
      }
      $uri = [Uri]::new("http://local" + $req.RawUrl)
      $path = [Uri]::UnescapeDataString($uri.AbsolutePath)
      $query = $uri.Query

      if ($path -eq "/_next/image" -or $path -match "^/artifacts/") {
        $hash = $null
        if ($query -match "artifacts(?:%2F|/)([a-f0-9]{64})") { $hash = $Matches[1] }
        elseif ($path -match "^/artifacts/([a-f0-9]{64})") { $hash = $Matches[1] }
        if ($hash) {
          $file = Get-ArtifactFile $hash
          if (-not $file) { $file = Save-Artifact $hash }
          if ($file) {
            $payload = Get-FileBytes $file
            Write-Http $stream 200 "OK" $payload.Type $payload.Bytes
            continue
          }
        }
      }

      if (-not $path.StartsWith("/api/")) {
        $local = Resolve-Local $path $query
        if ($local) {
          $payload = Get-FileBytes $local
          Write-Http $stream 200 "OK" $payload.Type $payload.Bytes
          continue
        }
      }

      $proxied = Get-Proxy $req.RawUrl
      if ($proxied) {
        Write-Http $stream 200 "OK" $proxied.Type $proxied.Bytes
      } else {
        Write-Http $stream 404 "Not Found" "text/plain" ([Text.Encoding]::UTF8.GetBytes("not found"))
      }
    } catch {
      try {
        Write-Http $client.GetStream() 500 "Error" "text/plain" ([Text.Encoding]::UTF8.GetBytes("$($_.Exception.Message)"))
      } catch { }
    } finally {
      try { $client.Close() } catch { }
    }
  }
} finally {
  $listener.Stop()
}
