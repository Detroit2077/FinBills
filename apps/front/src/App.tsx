import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
import Customer from "./pages/Customer";
import Ledgers from "./pages/Ledger";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/ledgers" element={<Ledgers />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
