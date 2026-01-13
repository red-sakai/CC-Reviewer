export default function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          ISC2 Certified in Cybersecurity
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
          Master Your <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">CC Exam</span>
        </h1>
        
        <p className="mb-10 text-lg text-slate-600 dark:text-slate-300 md:text-xl">
          Comprehensive study materials and practice questions to help you ace the ISC2 Certified in Cybersecurity exam on your first attempt.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl">
            Start Studying
          </button>
          <button className="rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:border-slate-400 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600">
            Study Material
          </button>
        </div>
      </div>
    </div>
  );
}
