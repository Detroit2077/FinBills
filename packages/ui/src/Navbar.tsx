import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10); // Trigger when scrolling down more than 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolling
          ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      } h-20 `}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600 transition-all font-sans">
          FinBills
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg text-gray-800">
          <li className="relative group">
            <a
              href="#features"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out "
            >
              Pricing
            </a>
            <div className="absolute left-0 hidden group-hover:block w-36 bg-blue-600 text-white text-sm p-2 rounded-lg shadow-lg">
              Quick overview of features
            </div>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="hover:text-blue-600 transition-all duration-300 ease-in-out "
            >
              About
            </a>
            <div className="absolute left-0 hidden group-hover:block w-36 bg-blue-600 text-white text-sm p-2 rounded-lg shadow-lg">
              Learn more about us
            </div>
          </li>
          <li>
            <a
              href="#cta"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;