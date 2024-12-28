import "./index.css";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative py-24 bg-gradient-to-r from-blue-300 via-white to-blue-500 text-center text-white overflow-hidden my-0"
    >
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Ready to <span className="text-blue-600">Elevate</span> Your Business?
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          Take the first step towards smarter financial management with
          FinBills.
        </p>
        <a
          href="/sign-up"
          className="mt-8 inline-block bg-gradient-to-r from-teal-400 to-blue-400 hover:from-blue-400 hover:to-teal-400 text-white py-3 px-10 rounded-full text-lg font-semibold shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300"
        >
          Sign Up Now
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-[-50px] w-72 h-72 bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-500 opacity-30 rounded-full blur-2xl"></div>
      <div className="absolute top-20 right-[-60px] w-80 h-80 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[-50px] left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-300 via-pink-500 to-blue-400 opacity-25 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;