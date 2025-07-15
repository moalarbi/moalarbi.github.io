@echo off
echo 🚀 بدء عملية النشر...

REM 1. بناء المشروع وتصديره
pnpm build && pnpm export

REM 2. نسخ ملفات out إلى جذر المشروع
xcopy out\*.* . /E /Y /I

REM 3. إضافة التعديلات للـ git
git add .

REM 4. حفظ التعديلات برسالة
git commit -m "🚀 تحديث الموقع"

REM 5. الدفع إلى GitHub
git push origin main

echo ✅ تم رفع الموقع على: https://moalarbi.github.io/
pause