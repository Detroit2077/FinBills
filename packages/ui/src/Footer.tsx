const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Company Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FinBills</h3>
          <p className="text-gray-400">
            We are committed to helping businesses simplify and streamline their
            financial management with intuitive and powerful tools.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#cta"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul>
            <li className="text-gray-400">
              Email:{" "}
              <a href="mailto:info@finbills.com" className="hover:text-white">
                info@finbills.com
              </a>
            </li>
            <li className="text-gray-400">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </a>
            </li>
            <li className="text-gray-400">
              Address: 123 Business St, Suite 400, City, Country
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com/finbills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path/to/facebook-icon.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com/finbills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path/to/twitter-icon.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://linkedin.com/company/finbills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path/to/linkedin-icon.svg"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://instagram.com/finbills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/path/to/instagram-icon.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="mt-12 text-center text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FinBills. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a
            href="/privacy-policy"
            className="text-sm hover:text-white transition duration-300 mx-4"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-sm hover:text-white transition duration-300 mx-4"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;