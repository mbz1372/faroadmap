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

// 🧱 فایل RoadmapTree.tsx: src/components/RoadmapTree.tsx
interface StepNode {
  id: string;
  title: string;
  description?: string;
  children?: StepNode[];
}

interface Props {
  steps: StepNode[];
}

export default function RoadmapTree({ steps }: Props) {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div key={step.id} className="bg-white border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-bold text-blue-600 mb-2">{step.title}</h2>
          {step.description && <p className="text-gray-700 mb-4 text-sm">{step.description}</p>}
          {step.children && (
            <ul className="list-disc pr-5 text-gray-800 text-sm space-y-1">
              {step.children.map((child) => (
                <li key={child.id}>{child.title}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// 🧱 صفحه roadmap: src/app/[slug]/page.tsx
import { frontendRoadmap } from "@/data/frontend";
import { backendRoadmap } from "@/data/backend";
import RoadmapTree from "@/components/RoadmapTree";

interface Params {
  params: { slug: string };
}

export default function RoadmapPage({ params }: Params) {
  const { slug } = params;
  const data = slug === "frontend" ? frontendRoadmap : slug === "backend" ? backendRoadmap : [];

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">نقشه راه {slug === "frontend" ? "فرانت‌اند" : slug === "backend" ? "بک‌اند" : ""}</h1>
      <RoadmapTree steps={data} />
    </main>
  );
}
