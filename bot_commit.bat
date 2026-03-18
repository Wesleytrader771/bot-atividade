@echo off
cd /d "C:\projeto\meu-projeto\bot-atividade"

set count=1

:loop

set filename=dev_%random%_%count%.txt
echo Conteudo %random% %time% > %filename%

echo Update %random% %date% %time% >> atividade.txt

git add .
git commit -m "update system %random%"
git push

set /a count+=1

timeout /t 60 >nul

goto loop