@echo off
echo Building SQL+ executable...
call npm run build

echo.
echo Creating ZIP file...
cd dist
powershell Compress-Archive -Path sqlplus.exe -DestinationPath sqlplus-windows.zip -Force
cd ..

echo.
echo Done! The file is ready at: dist\sqlplus-windows.zip
echo Upload this file to GitHub Releases
echo.
pause
