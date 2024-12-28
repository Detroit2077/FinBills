import React from "react";

const Features = () => {
  const featureData = [
    {
      title: "Real-Time Reports",
      description:
        "Monitor your business with up-to-the-minute insights to make informed decisions.",
      icon: "/path/to/sketched-icon-1.svg",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Automated Workflows",
      description:
        "Reduce manual effort by automating repetitive tasks seamlessly.",
      icon: "/path/to/sketched-icon-2.svg",
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: "Easy Integration",
      description:
        "Integrate with your favorite tools and platforms effortlessly.",
      icon: "/path/to/sketched-icon-3.svg",
      gradient: "from-pink-400 to-red-500",
    },
    {
      title: "Inventory Management",
      description:
        "Keep track of stock levels and optimize inventory with ease.",
      icon: "/path/to/sketched-icon-4.svg",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Customizable Dashboards",
      description:
        "Tailor your experience with dashboards that suit your needs.",
      icon: "/path/to/sketched-icon-5.svg",
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      title: "Secure Transactions",
      description:
        "Ensure peace of mind with advanced security for all financial operations.",
      icon: "/path/to/sketched-icon-6.svg",
      gradient: "from-red-400 to-pink-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Features
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with innovative tools to streamline operations
          and boost growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-screen-xl mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div
              className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
            >
              {/* <img src={feature.icon} alt={`${feature.title} Icon`} className="w-8 h-8" /> */}
            </div>
            <h3 className="mt-8 text-2xl font-bold text-gray-800">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;