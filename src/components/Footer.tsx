// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          FARoadmap
        </Link>
        <nav className="text-sm space-x-4 space-x-reverse">
          <Link href="/frontend" className="text-gray-700 hover:text-blue-600">فرانت‌اند</Link>
          <Link href="/backend" className="text-gray-700 hover:text-blue-600">بک‌اند</Link>
        </nav>
      </div>
    </header>
  );
}


// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-500">
      <p>
        ساخته شده با ❤️ توسط تیم FARoadmap | منبع: roadmap.sh
      </p>
    </footer>
  );
}
