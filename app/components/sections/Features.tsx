export default function Features() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="fade-in mb-4 text-center text-3xl font-bold text-slate-900 opacity-0 transition-all duration-1000 dark:text-white md:text-4xl [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
          Everything You Need to Succeed
        </h2>
        <p className="fade-in mb-12 text-center text-slate-600 opacity-0 transition-all duration-1000 delay-100 dark:text-slate-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
          Comprehensive tools and resources designed for CC exam success
        </p>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="fade-in rounded-xl bg-white p-8 shadow-lg opacity-0 transition-all duration-1000 delay-200 hover:scale-105 dark:bg-slate-800 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Study Materials
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Comprehensive coverage of all five CC exam domains with clear explanations and real-world examples.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="fade-in rounded-xl bg-white p-8 shadow-lg opacity-0 transition-all duration-1000 delay-300 hover:scale-105 dark:bg-slate-800 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Practice Questions
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Hundreds of practice questions that mirror the actual exam format with detailed explanations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="fade-in rounded-xl bg-white p-8 shadow-lg opacity-0 transition-all duration-1000 delay-[400ms] hover:scale-105 dark:bg-slate-800 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Progress Tracking
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Monitor your performance and identify weak areas to focus your study efforts effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
