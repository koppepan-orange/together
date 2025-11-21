@REM ～main.pyまでの動き～
@echo off
py -m venv venv
call venv\Scripts\activate.bat
echo "pip is using now"
pip install websockets pillow
pip list