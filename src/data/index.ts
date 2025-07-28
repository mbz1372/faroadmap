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

// 📘 دیتای Roadmap: data/backend.ts
export const backendRoadmap = [
  {
    id: "language",
    title: "زبان برنامه‌نویسی بک‌اند",
    description: "یادگیری یکی از زبان‌های رایج سمت سرور مثل Node.js, Python, PHP",
    children: [
      { id: "nodejs", title: "Node.js" },
      { id: "python", title: "Python" },
      { id: "php", title: "PHP" }
    ]
  },
  {
    id: "database",
    title: "پایگاه داده‌ها",
    description: "مفاهیم SQL و NoSQL مثل MySQL, PostgreSQL, MongoDB",
    children: [
      { id: "mysql", title: "MySQL" },
      { id: "postgresql", title: "PostgreSQL" },
      { id: "mongodb", title: "MongoDB" }
    ]
  },
  {
    id: "api",
    title: "ساخت API",
    description: "RESTful API و مفاهیم HTTP و Express یا FastAPI",
    children: [
      { id: "rest", title: "REST API" },
      { id: "express", title: "Express.js" },
      { id: "fastapi", title: "FastAPI" }
    ]
  }
];

// 📘 فایل لیست نقشه‌ها: data/index.ts
import { frontendRoadmap } from "./frontend";
import { backendRoadmap } from "./backend";

export const allRoadmaps = [
  {
    id: "frontend",
    title: "نقشه راه فرانت‌اند",
    description: "مسیر یادگیری برای توسعه رابط کاربری",
    data: frontendRoadmap,
  },
  {
    id: "backend",
    title: "نقشه راه بک‌اند",
    description: "مسیر یادگیری برای توسعه سمت سرور",
    data: backendRoadmap,
  }
];
