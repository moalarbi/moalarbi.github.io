#!/bin/bash

echo "🔧 بدء عملية الإصلاح..."

# 1. إضافة سكربت export داخل package.json إذا غير موجود
if ! grep -q '"export":' package.json; then
  echo "✅ إضافة سكربت 'export' إلى package.json"
  sed -i.bak '/"build":/a\    "export": "next export",' package.json
else
  echo "✔️ سكربت 'export' موجود مسبقًا"
fi

# 2. ضبط metadataBase في layout أو config
LAYOUT_FILE="./app/layout.tsx"
CONFIG_FILE="./next.config.js"
DOMAIN_URL="https://moalarbi.com"

if [ -f "$LAYOUT_FILE" ]; then
  if ! grep -q 'metadataBase' "$LAYOUT_FILE"; then
    echo "✅ ضبط metadataBase في layout.tsx"
    sed -i.bak "1i\export const metadata = { metadataBase: new URL('$DOMAIN_URL') }\n" "$LAYOUT_FILE"
  else
    echo "✔️ metadataBase موجود في layout.tsx"
  fi
elif [ -f "$CONFIG_FILE" ]; then
  if ! grep -q 'metadataBase' "$CONFIG_FILE"; then
    echo "✅ ضبط metadataBase في next.config.js"
    echo -e "\nmodule.exports = {\n  experimental: {\n    metadataBase: new URL('$DOMAIN_URL'),\n  },\n};" >> "$CONFIG_FILE"
  else
    echo "✔️ metadataBase موجود في next.config.js"
  fi
else
  echo "⚠️ لم يتم العثور على layout.tsx أو next.config.js"
fi

# 3. الموافقة على السكربتات المحجوبة في pnpm
echo "✅ الموافقة على السكربتات المحجوبة في pnpm"
pnpm approve-builds || echo "⚠️ تأكد أنك تستخدم pnpm v8+"

# 4. تعطيل fetch المزيف "fake.upstash.url"
echo "🧹 البحث عن fetch للفيوك API المزيف..."
find . -name "*.ts*" -type f -exec grep -l 'fake.upstash.url' {} \; | while read -r file; do
  echo "⚠️ تم العثور على fake fetch في: $file"
  sed -i.bak 's/fetch("fake.upstash.url")/\/\/ fetch("fake.upstash.url") \/\/ تم التعطيل تلقائيًا/' "$file"
done

echo "✅ انتهت عملية الإصلاح. قم الآن بتجربة:"
echo "   pnpm build && pnpm run export"