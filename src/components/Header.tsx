export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">FARoadmap</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-black">خانه</a>
          <a href="#" className="hover:text-black">درباره ما</a>
          <a href="#" className="hover:text-black">تماس</a>
        </nav>
      </div>
    </header>
  );
}
