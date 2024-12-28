const BusinessFeatures = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Business Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Financial Reporting</h3>
            <p className="text-gray-600">
              Automate your financial reports with customizable templates to
              gain insights into your business operations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
            <p className="text-gray-600">
              Keep track of your stock and manage inventory with real-time
              updates to streamline your business operations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cash Flow Insights</h3>
            <p className="text-gray-600">
              Get in-depth analytics on your business’s cash flow to make better
              decisions and improve profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;