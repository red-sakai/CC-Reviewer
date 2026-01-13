export default function CTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="fade-in mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center shadow-2xl opacity-0 transition-all duration-1000 [&.animate-in]:scale-100 [&.animate-in]:opacity-100 [&:not(.animate-in)]:scale-95">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Ready to Get Certified?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Join thousands of professionals who have passed their CC exam with our comprehensive study platform.
        </p>
        <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-lg">
          Get Started Today
        </button>
      </div>
    </section>
  );
}
