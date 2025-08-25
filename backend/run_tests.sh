#!/bin/bash

# Backend Testing Script for BootCamp Simulator

echo "🧪 BootCamp Simulator Backend Testing"
echo "====================================="

# Check if virtual environment is activated
if [[ "$VIRTUAL_ENV" != "" ]]; then
    echo "✅ Virtual environment is activated: $VIRTUAL_ENV"
else
    echo "❌ Virtual environment is not activated"
    echo "Please activate your virtual environment first:"
    echo "  source env/bin/activate"
    exit 1
fi

# Install test dependencies if needed
echo ""
echo "📦 Installing test dependencies..."
pip install -r requirements_flask.txt

# Run tests
echo ""
echo "🏃 Running tests..."
echo ""

# Run all tests with coverage
python -m pytest tests/ --cov=. --cov-report=html --cov-report=term-missing -v

# Check exit code
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All tests passed!"
    echo "📊 Coverage report generated in htmlcov/index.html"
else
    echo ""
    echo "❌ Some tests failed!"
    exit 1
fi
