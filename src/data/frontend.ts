export const frontendRoadmap = [
  {
    id: "html",
    title: "آشنایی با HTML",
    description: "مفاهیم پایه HTML و تگ‌های رایج",
    children: [
      { id: "structure", title: "ساختار پایه HTML" },
      { id: "semantic", title: "تگ‌های معنایی" },
      { id: "forms", title: "فرم‌ها و ورودی‌ها" },
      { id: "tables", title: "جداول و عناصر جدولی" },
      { id: "media", title: "تصاویر، ویدیو و صوت" }
    ]
  },
  {
    id: "css",
    title: "آشنایی با CSS",
    description: "استایل‌دهی به صفحات وب",
    children: [
      { id: "selectors", title: "سِلکتورها و اولویت‌ها" },
      { id: "boxmodel", title: "مدل جعبه‌ای (Box Model)" },
      { id: "flexbox", title: "فلکس‌باکس و گرید" },
      { id: "responsive", title: "طراحی واکنش‌گرا (Responsive)" },
      { id: "units", title: "واحدهای اندازه‌گیری و اندازه‌گذاری" }
    ]
  },
  {
    id: "javascript",
    title: "آشنایی با JavaScript",
    description: "منطق و تعامل در صفحات وب",
    children: [
      { id: "syntax", title: "ساختار و قواعد زبان" },
      { id: "dom", title: "مدیریت DOM" },
      { id: "events", title: "رویدادها و مدیریت تعامل کاربر" },
      { id: "async", title: "Promise و Async/Await" },
      { id: "fetch", title: "ارتباط با سرور (Fetch API)" }
    ]
  },
  {
    id: "version-control",
    title: "سیستم کنترل نسخه",
    description: "مدیریت کد با Git و GitHub",
    children: [
      { id: "git-basics", title: "دستورات پایه Git" },
      { id: "github", title: "استفاده از GitHub" },
      { id: "branches", title: "شاخه‌ها و Merge" }
    ]
  },
  {
    id: "package-managers",
    title: "مدیریت پکیج‌ها",
    description: "نصب و مدیریت کتابخانه‌ها",
    children: [
      { id: "npm", title: "npm" },
      { id: "yarn", title: "yarn" },
      { id: "pnpm", title: "pnpm" }
    ]
  },
  {
    id: "build-tools",
    title: "ابزارهای Build",
    description: "ابزارهای تبدیل، فشرده‌سازی و اتوماسیون",
    children: [
      { id: "vite", title: "Vite" },
      { id: "webpack", title: "Webpack" },
      { id: "esbuild", title: "ESBuild" }
    ]
  },
  {
    id: "css-frameworks",
    title: "فریم‌ورک‌های CSS",
    description: "ابزارهای استایل‌دهی سریع و منظم",
    children: [
      { id: "tailwind", title: "Tailwind CSS" },
      { id: "bootstrap", title: "Bootstrap" }
    ]
  },
  {
    id: "js-frameworks",
    title: "فریم‌ورک‌های JavaScript",
    description: "توسعه رابط کاربری با کتابخانه‌ها",
    children: [
      { id: "react", title: "React" },
      { id: "vue", title: "Vue.js" },
      { id: "nextjs", title: "Next.js" }
    ]
  },
  {
    id: "testing",
    title: "تست‌نویسی",
    description: "اطمینان از عملکرد صحیح کد",
    children: [
      { id: "unit", title: "تست واحد (Unit Test)" },
      { id: "integration", title: "تست یکپارچه (Integration)" },
      { id: "e2e", title: "تست انتها به انتها (E2E)" }
    ]
  },
  {
    id: "web-security",
    title: "امنیت وب",
    description: "اصول امنیتی در توسعه فرانت‌اند",
    children: [
      { id: "xss", title: "XSS و محافظت در برابر آن" },
      { id: "csrf", title: "CSRF و روش‌های مقابله" },
      { id: "https", title: "استفاده از HTTPS و رمزنگاری" }
    ]
  },
  {
    id: "performance",
    title: "بهینه‌سازی عملکرد",
    description: "بهبود سرعت بارگذاری و تجربه کاربر",
    children: [
      { id: "lazy-loading", title: "بارگذاری تنبل (Lazy Loading)" },
      { id: "code-splitting", title: "تقسیم کد (Code Splitting)" },
      { id: "caching", title: "کَش و ذخیره‌سازی مرورگر" }
    ]
  },
  {
    id: "accessibility",
    title: "دسترس‌پذیری (Accessibility)",
    description: "اطمینان از دسترسی برای همه کاربران",
    children: [
      { id: "aria", title: "ویژگی‌های ARIA" },
      { id: "semantic-html", title: "تگ‌های معنایی" },
      { id: "keyboard-nav", title: "ناوبری با کیبورد" }
    ]
  },
  {
    id: "tools",
    title: "ابزارهای توسعه",
    description: "افزونه‌ها و ابزارهای مفید",
    children: [
      { id: "devtools", title: "Chrome DevTools" },
      { id: "linters", title: "Linting (مثل ESLint)" },
      { id: "formatters", title: "Formatting (مثل Prettier)" }
    ]
  },
  {
    id: "deployment",
    title: "استقرار و انتشار",
    description: "منتشر کردن پروژه روی وب",
    children: [
      { id: "vercel", title: "Vercel" },
      { id: "netlify", title: "Netlify" },
      { id: "github-pages", title: "GitHub Pages" }
    ]
  }
];
