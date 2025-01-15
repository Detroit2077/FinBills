import React, { useState, useEffect } from "react";
import { Appbar, Sidebar } from "@repo/ui/index";
import { FaPlusCircle, FaTrash, FaExclamationCircle, FaFileUpload, FaBoxOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const Inventory: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<
    { id: number; name: string; stock: number; lowStockLimit: number }[]
  >([]);
  const [lowStockAlerts, setLowStockAlerts] = useState<
    { id: number; name: string; stock: number }[]
  >([]);
  const [showAlerts, setShowAlerts] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  // Fetch inventory items (mock data for now)
  useEffect(() => {
    const mockItems = [
      { id: 1, name: "Item A", stock: 50, lowStockLimit: 30 },
      { id: 2, name: "Item B", stock: 15, lowStockLimit: 20 },
      { id: 3, name: "Item C", stock: 5, lowStockLimit: 10 },
    ];
    setInventoryItems(mockItems);
    setLowStockAlerts(mockItems.filter((item) => item.stock <= item.lowStockLimit));
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const handleInventoryUpload = (file: File) => {
    alert(`Uploaded inventory file: ${file.name}`);
  };

  const removeInventory = (id: number) => {
    const updatedInventory = inventoryItems.filter((item) => item.id !== id);
    setInventoryItems(updatedInventory);
    setLowStockAlerts(updatedInventory.filter((item) => item.stock <= item.lowStockLimit));
  };

  return (
    <div className="min-h-screen">
      <Appbar />
      <div className="flex">
        <Sidebar />
        {/* Main Content */}
     <div className="flex-grow p-8 space-y-8  bg-slate-200">
          {/* Header Section */}
          <div className="flex justify-between items-center border border-slate-400 p-4 rounded-md shadow-md bg-slate-100">
          <div className="flex items-center gap-40 ml-3"> 
          <FaArrowLeft size={30} color="grey" onClick={()=>{navigate(-1)}} />
                 <p className="text-2xl font-bold  text-slate-600">Inventory Management</p>
          </div>
          <div className="flex space-x-4">
              <Link to="/addItem" className="flex items-center bg-cyan-900 text-white px-4 py-2 rounded shadow hover:bg-green-800  hover:scale-100">
                <FaPlusCircle className="mr-2">
                </FaPlusCircle>
                Add Inventory
              </Link>
              <label className="flex items-center bg-blue-800 text-white px-4 py-2 rounded shadow cursor-pointer hover:bg-blue-700 scale-100">
                <FaFileUpload className="mr-2" />
                <span>Upload PDF</span>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => e.target.files && handleInventoryUpload(e.target.files[0])}
                />
              </label>
              <button onClick={() => navigate("/exploreinventory")} className="flex items-center bg-indigo-800 text text-white text-sm py-1 rounded shadow hover:bg-indigo-700  hover:scale-100">
                <FaBoxOpen className="mr-2" />
                Explore Inventory
              </button>
              <button onClick={() => setShowAlerts(true)} className="flex items-center bg-red-900 text-white px-4 py-2 rounded shadow hover:bg-red-800 hover:scale-100">
                <FaExclamationCircle className=" mr-2"  size={16}/>
                <p className="text-sm">Alert</p>
              </button>
          </div>
      </div>

          {/* Search Bar */}
          <div className="bg-white shadow rounded flex items-center px-4 py-2">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search inventory..."
              className="flex-grow bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Inventory Items */}
          <div className="bg-white shadow rounded">
            {/* Headers */}
            <div className="flex bg-slate-600 text-white font-bold rounded-t-lg">
              <div className="flex-1 p-2">Item Name</div>
              <div className="flex-1 p-2">Stock</div>
              <div className="flex-1 p-2">Low Stock Limit</div>
              <div className="flex-1 p-2">Actions</div>
            </div>
            {/* Rows */}
            {inventoryItems
              .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
              .map((item) => (
                <div key={item.id} className="grid grid-cols-4 h-10 bg-slate-200 hover:bg-gray-100 border-b border-slate-300">
                  <div className="px-4 py-1 border-r border-slate-300">{item.name}</div>
                  <div className="px-4 py-1 border-r border-slate-300">{item.stock}</div>
                  <div className="px-4 py-1 border-r border-slate-300">{item.lowStockLimit}</div>
                  <div className="px-4 py-1 border-r border-slate-300">
                    <div onClick={() => removeInventory(item.id)} className="text-red-600 hover:text-red-800 hover:scale-100 text-center pt-1 cursor-pointer">
                      <FaTrash size={16}  className="select-none"/>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
