@REM ～main.pyまでの動き～
@echo off
py -m venv venv
venv\Scripts\activate.bat
pip install -r requirements.txt
pip list