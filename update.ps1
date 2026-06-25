# update.ps1  —  sincroniza o vault para o Quartz e publica.
# Rode DENTRO da pasta do Quartz:  .\update.ps1
# Edite o caminho do vault se necessário.

# Path do vault por wildcard — evita acento no literal (PS 5.1 lê .ps1 como ANSI e quebrava o caminho).
$vault   = (Resolve-Path (Join-Path $env:USERPROFILE "Documents\Racioc*")).Path
$content = Join-Path $PSScriptRoot "content"

Write-Host "Sincronizando vault -> content ..." -ForegroundColor Cyan
# /MIR espelha (apaga em content o que sumiu no vault).
# Exclui pastas de sistema e artefatos antigos do app single-file.
robocopy $vault $content /MIR `
  /XD ".obsidian" ".claude" ".git" `
  /XF "index.html" "build_site.py" "app_template.html" | Out-Null
if ($LASTEXITCODE -ge 8) { Write-Host "ERRO: robocopy falhou ($LASTEXITCODE). Nada foi sincronizado — abortando." -ForegroundColor Red; exit 1 }

Write-Host "Removendo títulos H1 duplicados ..." -ForegroundColor Cyan
python (Join-Path $PSScriptRoot "strip-titles.py")

Write-Host "Commit + push ..." -ForegroundColor Cyan
git add .
git commit -m ("conteúdo atualizado " + (Get-Date -Format "yyyy-MM-dd HH:mm"))
git push

Write-Host "Pronto. O GitHub Action vai reconstruir o site em ~1-2 min." -ForegroundColor Green
