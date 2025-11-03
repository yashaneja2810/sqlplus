@echo off
echo Installing SQL+ AI Command Processor...
echo.

REM Create installation directory
set INSTALL_DIR=%ProgramFiles%\SQLPlus
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"

REM Copy executable
copy sqlplus.exe "%INSTALL_DIR%\sqlplus.exe" >nul

REM Add to PATH
setx PATH "%PATH%;%INSTALL_DIR%" /M

echo.
echo SQL+ installed successfully!
echo You can now run 'sqlplus' from any command prompt.
echo.
pause
