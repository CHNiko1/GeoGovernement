@echo off
REM Georgian Government Website - Quick Start Script (Windows)

echo.
echo ====================================================
echo  Georgian Government Demo Website Launcher
echo ====================================================
echo.

REM Check if virtual environment exists
if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo Error: Failed to create virtual environment
        echo Make sure Python is installed and in your PATH
        pause
        exit /b 1
    )
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo Error: Failed to activate virtual environment
    pause
    exit /b 1
)

REM Install Flask if needed
echo Checking Flask installation...
pip show flask >nul 2>&1
if errorlevel 1 (
    echo Installing Flask...
    pip install flask
    if errorlevel 1 (
        echo Error: Failed to install Flask
        pause
        exit /b 1
    )
)

REM Start the application
echo.
echo ====================================================
echo  Starting Georgian Government Website...
echo ====================================================
echo.
echo The website will open at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
python app.py

pause
