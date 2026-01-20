#!/bin/bash
# Georgian Government Website - Quick Start Script (macOS/Linux)

echo ""
echo "===================================================="
echo "  Georgian Government Demo Website Launcher"
echo "===================================================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed"
    echo "Please install Python 3.8 or higher"
    exit 1
fi

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    if [ $? -ne 0 ]; then
        echo "Error: Failed to create virtual environment"
        exit 1
    fi
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate
if [ $? -ne 0 ]; then
    echo "Error: Failed to activate virtual environment"
    exit 1
fi

# Install Flask if needed
echo "Checking Flask installation..."
python3 -m pip show flask > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Installing Flask..."
    pip install flask
    if [ $? -ne 0 ]; then
        echo "Error: Failed to install Flask"
        exit 1
    fi
fi

# Start the application
echo ""
echo "===================================================="
echo "  Starting Georgian Government Website..."
echo "===================================================="
echo ""
echo "The website will open at: http://localhost:5000"
echo "Press Ctrl+C to stop the server"
echo ""

python3 app.py
