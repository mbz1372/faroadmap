export const metadata = {
  title: "FARoadmap - نقشه راه یادگیری",
  description: "مسیر یادگیری تخصص‌های مختلف به زبان فارسی",
};

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
