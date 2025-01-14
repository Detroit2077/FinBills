import React, { useState, useEffect } from "react";
import { Appbar, Sidebar } from "@repo/ui/index";
import { FaPlusCircle, FaTrash, FaExclamationCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Inventory: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<
    { id: number; name: string; stock: number; lowStockLimit: number }[]
  >([]);
  const [lowStockAlerts, setLowStockAlerts] = useState<
    { id: number; name: string; stock: number }[]
  >([]);
  const [showAlerts, setShowAlerts] = useState<boolean>(false); // Modal visibility for alerts
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

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  // Handle adding an uploaded inventory file (PDF)
  const handleInventoryUpload = (file: File) => {
    alert(`Uploaded inventory file: ${file.name}`);
  };

  // Handle deleting an inventory item
  const removeInventory = (id: number) => {
    const updatedInventory = inventoryItems.filter((item) => item.id !== id);
    setInventoryItems(updatedInventory);
    setLowStockAlerts(updatedInventory.filter((item) => item.stock <= item.lowStockLimit));
  };

  return (
    <div>
      <Appbar />
      <div className="flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow bg-slate-100 min-h-screen p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-700">Inventory Management</h1>
            <div className="space-x-4">
              <Link
                to="/addItem"
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                <FaPlusCircle className="mr-2" />
                Add Inventory
              </Link>

              <label
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
              >
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && handleInventoryUpload(e.target.files[0])
                  }
                />
                Upload PDF
              </label>

              <button
                onClick={() => navigate("/inventoryList")}
                className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Explore Inventory
              </button>

              <button
                onClick={() => setShowAlerts(true)}
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                <FaExclamationCircle className="mr-2" />
                Low Stock Alerts
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center bg-white shadow-md rounded p-4">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search for items..."
              className="flex-grow bg-transparent outline-none"
            />
          </div>

          {/* Low Stock Alerts Modal */}
          {showAlerts && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-lg font-bold mb-4">Low Stock Alerts</h2>
                {lowStockAlerts.length > 0 ? (
                  <ul>
                    {lowStockAlerts.map((item) => (
                      <li key={item.id}>
                        {item.name} is running low (Stock: {item.stock})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No items with low stock.</p>
                )}
                <button
                  onClick={() => setShowAlerts(false)}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Items Table */}
          <table className="w-full bg-white shadow-md rounded overflow-hidden">
            <thead className="bg-slate-700 text-white">
              <tr>
                <th className="text-left p-4">Item Name</th>
                <th className="text-left p-4">Stock</th>
                <th className="text-left p-4">Low Stock Limit</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <tr key={item.id} className="hover:bg-slate-100">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">{item.stock}</td>
                    <td className="p-4">{item.lowStockLimit}</td>
                    <td className="p-4 flex items-center space-x-4">
                      <button
                        onClick={() => removeInventory(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
