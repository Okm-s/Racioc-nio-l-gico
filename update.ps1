# update.ps1  —  sincroniza o vault para o Quartz e publica.
# Rode DENTRO da pasta do Quartz:  .\update.ps1
# Edite o caminho do vault se necessário.

$vault   = "C:\Users\ookam\Documents\Raciocínio lógico"
$content = Join-Path $PSScriptRoot "content"

Write-Host "Sincronizando vault -> content ..." -ForegroundColor Cyan
# /MIR espelha (apaga em content o que sumiu no vault).
# Exclui pastas de sistema e artefatos antigos do app single-file.
robocopy $vault $content /MIR `
  /XD ".obsidian" ".claude" ".git" `
  /XF "index.html" "build_site.py" "app_template.html" | Out-Null

Write-Host "Commit + push ..." -ForegroundColor Cyan
git add .
git commit -m ("conteúdo atualizado " + (Get-Date -Format "yyyy-MM-dd HH:mm"))
git push

Write-Host "Pronto. O GitHub Action vai reconstruir o site em ~1-2 min." -ForegroundColor Green
