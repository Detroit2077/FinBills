import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="max-h-screen relative w-52 bg-slate-600 rounded-md">
      <div className="flex flex-col items-center text-slate-300 justify-center pt-5 space-y-4 select-none">
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center  border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300 border-b-[1px]">
          <Link to="/customers">Customers</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/inventory">Inventory</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/ledgers">Ledger</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/barcode">Barcode</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/reports">Reports</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/transactions">Transactions</Link>
        </div>
        <div className="h-10 w-full text-slate-300 flex justify-center items-center border-b-2 border-transparent hover:border-blue-500 hover:bg-blue-700 hover:text-white transition-all duration-300">
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;