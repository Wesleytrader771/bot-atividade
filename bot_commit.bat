@echo off
title BOT COMMIT AUTOMATICO
color 0A

set contador=1

:loop

echo [%time%] Commit #%contador% OK

echo Commit %contador% >> atividade.txt

git add .
git commit -m "commit #%contador%"
git push

set /a contador+=1

timeout /t 6 >nul

cls

goto loop