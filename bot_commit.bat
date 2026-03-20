@echo off
color 0A

:: SOM AO INICIAR
powershell -c (New-Object Media.SoundPlayer 'C:\Windows\Media\notify.wav').PlaySync();

title INICIANDO BOT...

echo ==============================
echo   BOT INICIADO COM SUCESSO
echo ==============================
timeout /t 2 >nul

set contador=1

:loop

title BOT ATIVO ^| TOTAL: %contador%

echo [%time%] Commit #%contador% OK

echo Commit %contador% >> atividade.txt

echo %random% >> log_%random%.txt
git add . >nul 2>&1
git commit -m "update arquivo %random%" >nul 2>&1
git push >nul 2>&1

set /a contador+=1

timeout /t 6 >nul

goto loop