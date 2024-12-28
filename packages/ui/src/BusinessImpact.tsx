const BusinessImpact = () => {
  return (
    <section className="py-20 bg-blue-300 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">The Impact We Make</h2>
        <p className="text-xl mb-10">
          FinBills helps businesses across the globe save time, reduce costs,
          and optimize financial operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Impact 1 */}
          <div className="bg-white text-blue-600 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Save Time</h3>
            <p className="text-gray-600">
              With automation, businesses can save hours of manual work,
              allowing teams to focus on growth.
            </p>
          </div>

          {/* Impact 2 */}
          <div className="bg-white text-blue-600 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reduce Costs</h3>
            <p className="text-gray-600">
              Reduce operational costs by streamlining your processes and making
              data-driven decisions.
            </p>
          </div>

          {/* Impact 3 */}
          <div className="bg-white text-blue-600 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Optimize Operations</h3>
            <p className="text-gray-600">
              Achieve better business outcomes by optimizing your inventory,
              cash flow, and financial reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;