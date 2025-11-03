@echo off
echo Building SQL+ executable...
call npm run build

echo.
echo Creating ZIP file...
cd dist
powershell Compress-Archive -Path sqlplus.exe -DestinationPath sqlplus-windows.zip -Force
cd ..

echo.
echo Done! Upload dist/sqlplus-windows.zip to GitHub Releases
echo.
pause
