import React, { useState, useEffect } from "react";
import { Appbar, Sidebar } from "@repo/ui/index";
import { FaPlusCircle, FaTrash, FaExclamationCircle, FaFileUpload, FaBoxOpen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-100">
      <Appbar />
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow p-8 space-y-8">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>
            <div className="flex space-x-4">
              <Link to="/addItem" className="flex items-center bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition">
                <FaPlusCircle className="mr-2" />
                Add Inventory
              </Link>
              <label className="flex items-center bg-blue-600 text-white px-4 py-2 rounded shadow cursor-pointer hover:bg-blue-700 transition">
                <FaFileUpload className="mr-2" />
                <span>Upload PDF</span>
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => e.target.files && handleInventoryUpload(e.target.files[0])}
                />
              </label>
              <button onClick={() => navigate("/inventoryList")} className="flex items-center bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition">
                <FaBoxOpen className="mr-2" />
                Explore Inventory
              </button>
              <button onClick={() => setShowAlerts(true)} className="flex items-center bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition">
                <FaExclamationCircle className="mr-2" />
                Alerts
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
                <div key={item.id} className="grid grid-cols-4 hover:bg-gray-100 border-b border-slate-300">
                  <div className="px-4 py-1 border-r border-slate-300">{item.name}</div>
                  <div className="px-4 py-1 border-r border-slate-300">{item.stock}</div>
                  <div className="px-4 py-1 border-r border-slate-300">{item.lowStockLimit}</div>
                  <div className="px-4 py-1 border-r border-slate-300">
                    <button onClick={() => removeInventory(item.id)} className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
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
