// 📁 پروژه FARoadmap - ساختار اولیه مشابه roadmap.sh به زبان فارسی

// 🧱 ساختار فایل‌ها و پوشه‌ها:

/‌src
├── app
│   ├── layout.tsx            // لایه اصلی سایت (با هدر، فوتر، فونت و RTL)
│   ├── page.tsx              // صفحه اصلی سایت (Homepage)
│   └── [slug]/page.tsx       // صفحات داخلی هر نقشه راه
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── RoadmapCard.tsx       // کارت نمایشی برای هر نقشه راه
│   ├── RoadmapTree.tsx       // نقشه گرافیکی مراحل هر مسیر (با framer-motion)
│   └── Sidebar.tsx
├── data
│   ├── index.ts              // لیست تمام roadmapها
│   ├── frontend.ts           // محتوای نقشه راه فرانت‌اند (فارسی)
│   └── backend.ts            // محتوای نقشه راه بک‌اند (فارسی)
├── lib
│   └── utils.ts              // توابع کمکی مثل تبدیل slug، مرتب‌سازی و...
├── styles
│   └── globals.css           // استایل پایه سایت (با Tailwind + direction: rtl)

// 🌍 public
/public
├── logo.png
├── favicon.ico
└── og.png

// ✅ پیکربندی‌ها
next.config.js              // فعال‌سازی تنظیمات مثل i18n یا import alias
postcss.config.js

tsconfig.json               // تنظیمات TypeScript با path alias

// 🧪 نمونه route اصلی: src/app/page.tsx
import RoadmapCard from "@/components/RoadmapCard";
import { frontendRoadmap } from "@/data/frontend";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">نقشه‌های راه یادگیری</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {frontendRoadmap.map((item) => (
          <RoadmapCard key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </main>
  );
}

// 📘 نمونه دیتای Roadmap: data/frontend.ts
export const frontendRoadmap = [
  {
    id: "html",
    title: "آشنایی با HTML",
    description: "یادگیری تگ‌های پایه، ساختار صفحات و فرم‌ها",
    children: [
      { id: "tags", title: "تگ‌های پایه" },
      { id: "forms", title: "فرم‌ها و ورودی‌ها" }
    ]
  }
];

// 🎨 فایل layout.tsx: پایه سایت
// src/app/layout.tsx
export const metadata = {
  title: "FARoadmap - نقشه راه یادگیری",
  description: "مسیر یادگیری تخصص‌های مختلف به زبان فارسی",
};

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          {/* <Header /> */}

          <main className="flex-grow container mx-auto px-4 sm:px-8">{children}</main>

          {/* Footer */}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

// 🧱 فایل کامپوننت RoadmapCard: src/components/RoadmapCard.tsx
interface Props {
  title: string;
  description: string;
}

export default function RoadmapCard({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition-all">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
