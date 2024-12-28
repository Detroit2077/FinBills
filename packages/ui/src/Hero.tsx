import "./index.css";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-animated text-gray-800">
      <div className="text-center px-6 relative z-10">
        <h1 className="caveat-brush-regular text-6xl sm:text-7xl font-extrabold mb-4 leading-tight">
          Empower Your Business <br />
          with{" "}
          <span className="chubby-text text-white mt-4 caveat-brush-regular">
            FinBills
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Streamline your financial operations, manage inventory, and scale your
          business with ease. Experience the future of business management
          today.
        </p>
        <div>
          <a
            href="#cta"
            className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-400 text-white px-6 py-3 rounded-lg shadow-lg text-lg transition-all transform hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Optional Decorative Shapes */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-blue-200 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-200 opacity-25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-200 opacity-30 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
