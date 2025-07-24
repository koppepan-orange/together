@echo off

rem ------- 置換前・置換後の文字列を設定 -------
set TARGET=command_box_
rem set REPLACE_WITH=
rem -----------------------------------------

for %%F in ( * ) do call :sub "%%F"
exit /b

:sub
set FILE_NAME=%1
call set FILE_NAME=%%FILE_NAME:%TARGET%=""%%
rename %1 %FILE_NAME%

goto :EOF

@REM ren *前* *後* で置換...も効かねぇ