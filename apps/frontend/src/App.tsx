import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Customer from "./pages/Customer";
import Ledgers from "./pages/Ledger";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import AddCustomer2 from "./pages/AddCustomer2";
import InvoicePage from "./pages/InvoicePage";
import BarcodePage from "./pages/BarcodePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/ledgers" element={<Ledgers />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/addCustomer" element={<AddCustomer2/>} />
        <Route path="/barcode" element={<BarcodePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
