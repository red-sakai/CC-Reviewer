export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-xl font-bold text-slate-900 dark:text-white">CC Reviewer</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Home
          </a>
          <a href="#" className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Study Materials
          </a>
          <a href="#" className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Practice Tests
          </a>
          <a href="#" className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            About
          </a>
        </div>

        <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
          Start Studying
        </button>
      </div>
    </nav>
  );
}
