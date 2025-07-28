export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} FARoadmap. همه حقوق محفوظ است.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-black">درباره ما</a>
          <a href="#" className="hover:text-black">تماس با ما</a>
          <a href="https://github.com/mbz1372/faroadmap" target="_blank" rel="noopener" className="hover:text-black">گیت‌هاب</a>
        </div>
      </div>
    </footer>
  );
}
