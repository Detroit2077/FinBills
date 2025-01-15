import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Ledgers from "./pages/Ledger";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import InvoicePage from "./pages/InvoicePage";
import BarcodePage from "./pages/BarcodePage";
import InventoryManagement from "./pages/InventoryPage";
import InventoryExplore from "./pages/InventoryExplore";
import AddCustomer from "./pages/AddCustomer";
import BrandPage from "./pages/BrandPage";
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
        <Route path="/invoice" element={<InvoicePage/>} />  
        <Route path="/exploreInventory" element={<InventoryExplore/>} />
        <Route path="/addCustomer" element={<AddCustomer/>} />
        <Route path="*" element={<BrandPage />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
