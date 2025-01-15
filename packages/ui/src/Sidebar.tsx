import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBoxes, FaBook, FaBarcode, FaChartBar, FaExchangeAlt, FaCog, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); 

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-slate-600 h-screen transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Hamburger Menu */}
          <div
            className="flex items-center gap-20 p-4 cursor-pointer hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-lg">
              <FaBars />
            </span>
            <span className={`${isOpen ? "block" : "hidden"} font-bold`}>
              Menu
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 mt-6">
            <SidebarLink
              to="/dashboard"
              icon={<FaTachometerAlt />}
              label="Dashboard"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/customers"
              icon={<FaUsers />}
              label="Customers"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/inventory"
              icon={<FaBoxes />}
              label="Inventory"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/ledgers"
              icon={<FaBook />}
              label="Ledger"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/barcode"
              icon={<FaBarcode />}
              label="Barcode"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/reports"
              icon={<FaChartBar />}
              label="Reports"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/transactions"
              icon={<FaExchangeAlt />}
              label="Transactions"
              isOpen={isOpen}
            />
            <SidebarLink
              to="/settings"
              icon={<FaCog />}
              label="Settings"
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
{/* 
      Main Content
      <div className="flex-grow bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Main Content Here</h1>
      </div> */}
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ to, icon, label, isOpen } ) => {
  return (
    <Link
      to={to}
      className="flex items-center space-x-4 text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 p-3 rounded-md mx-2"
    >
      <span className="text-lg">{icon}</span>
      <span className={`${isOpen ? "block" : "hidden"} text-sm`}>{label}</span>
    </Link>
  );
};

export default Sidebar;
