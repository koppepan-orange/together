@echo off
if exist ".\venv\Scripts\" (
    if "%VIRTUAL_ENV%"=="" (
        call venv\Scripts\activate.bat
    )
) else (
    call setup_python.bat
)

echo setup_OK_main.py_is_boot_now_!!
main.py