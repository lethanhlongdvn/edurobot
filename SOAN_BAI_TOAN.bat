@echo off
title Mo Cong cu Soan bai Toan - edurobot5
echo Dang khoi dong Cong cu Soan bai Toan...
echo ------------------------------------------
echo He thong dang khoi dong server (Vite)...
echo Vui long cho trong giay lat...

:: Khoi dong npm run dev trong nen
start /b npm run dev

:: Cho mot lat de server kip khoi dong truoc khi mo trinh duyet
timeout /t 5 /nobreak > nul

:: Mo trang cong cu soan bai
start "" "http://localhost:5173/math-builder.html"

echo ------------------------------------------
echo Server dang chay tai cong 5173. 
echo Vui long KHONG dong cua so nay khi dang soạn bài.
echo ------------------------------------------
pause
