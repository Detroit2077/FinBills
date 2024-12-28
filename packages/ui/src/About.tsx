const About = () => {
  return (
    <section
      id="about"
      className=" py-24 bg-gradient-to-r from-blue-100 via-white to-blue-200 text-gray-900 relative overflow-hidden px-5"
    >
      <div className="absolute top-0 left-0 w-36 h-36 bg-blue-300 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-25 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
          About <span className="text-blue-400">FinBills</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 sm:w-2/3 mx-auto">
          FinBills is a comprehensive financial management solution designed to
          streamline operations, automate financial tasks, and help businesses
          scale effortlessly.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Manage Finances
            </h3>
            <p className="text-gray-600 text-lg">
              Track your expenses and manage your revenue effortlessly with
              real-time analytics.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-300 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Optimize Inventory
            </h3>
            <p className="text-gray-600 text-lg">
              Get insights on inventory levels and automate your procurement
              process.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-400 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Scale Your Business
            </h3>
            <p className="text-gray-600 text-lg">
              Streamline operations and make data-driven decisions to grow your
              business efficiently.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-indigo-300 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              4
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Secure Your Future
            </h3>
            <p className="text-gray-600 text-lg">
              Automate your financial tasks and focus on scaling your business
              while we handle the numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
