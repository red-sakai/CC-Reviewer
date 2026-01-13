export default function ExamDomains() {
  const domains = [
    { name: "Security Principles", percentage: "26%", description: "Confidentiality, Integrity, and Availability concepts" },
    { name: "Incident Response, Business Continuity & Disaster Recovery", percentage: "10%", description: "Incident handling and recovery procedures" },
    { name: "Access Control Concepts", percentage: "22%", description: "Physical and logical access control systems" },
    { name: "Network Security", percentage: "24%", description: "Network infrastructure and security protocols" },
    { name: "Security Operations", percentage: "18%", description: "Security operations and administration" }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="fade-in mb-4 text-center text-3xl font-bold text-slate-900 opacity-0 transition-all duration-1000 dark:text-white md:text-4xl [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
          CC Exam Domains
        </h2>
        <p className="fade-in mb-12 text-center text-slate-600 opacity-0 transition-all duration-1000 delay-100 dark:text-slate-300 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-y-10">
          Master all five domains covered in the ISC2 CC certification exam
        </p>
        
        <div className="space-y-4">
          {domains.map((domain, index) => (
            <div key={index} className="fade-in rounded-lg bg-white p-6 shadow-md opacity-0 transition-all duration-1000 dark:bg-slate-800 [&.animate-in]:translate-x-0 [&.animate-in]:opacity-100 [&:not(.animate-in)]:translate-x-[-50px]" style={{ transitionDelay: `${(index + 2) * 100}ms` }}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {domain.name}
                    </h3>
                  </div>
                  <p className="ml-11 text-slate-600 dark:text-slate-300">
                    {domain.description}
                  </p>
                </div>
                <span className="ml-4 text-lg font-bold text-blue-600 dark:text-blue-400">
                  {domain.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
