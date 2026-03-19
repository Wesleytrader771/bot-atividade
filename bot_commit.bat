@echo off
title INICIANDO BOT...
color 0A

:: SOM REAL AO INICIAR
powershell -c (New-Object Media.SoundPlayer 'C:\Windows\Media\notify.wav').PlaySync();

echo ================================
echo        INICIANDO BOT...
echo ================================
timeout /t 2 >nul

set contador=1

:loop

cls
title BOT ATIVO ^| TOTAL: %contador%

echo [%time%] Commit #%contador% OK

echo Commit %contador% >> atividade.txt

git add .
git commit -m "commit #%contador%"
git push

set /a contador+=1

timeout /t 6 >nul

goto loop