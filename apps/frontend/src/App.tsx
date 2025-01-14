import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Customer from "./pages/Customer";
import Ledgers from "./pages/Ledger";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import InvoicePage from "./pages/InvoicePage";
import BarcodePage from "./pages/BarcodePage";
import InventoryManagement from "./pages/InventoryPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/ledgers" element={<Ledgers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/addItem" element={<AddItem/>} />
        <Route path="/barcode" element={<BarcodePage/>} />
        <Route path="/invoice" element={<InvoicePage/>} />      </Routes>
    </BrowserRouter>
  );
}

export default App;
