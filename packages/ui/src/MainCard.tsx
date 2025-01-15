import Table from "./Table.js";
import SearchBar from "./SearchBar.js";
import DateButton from "./FilterButtons.js";
import { FilterButton } from "./FilterButtons.js";
import Card from "./Card.js";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

interface cardOptions {
  title: string;
  col: string;
  amount: number;
  currency?: boolean;
}
const MainCard = ({ title }: Data) => {
  const cardData: cardOptions[] = [
    { title: "Total Credits", col: "text-green-500", amount: 10000 },
    { title: "Total Debits", col: "text-red-500", amount: 1000 },
    { title: "Total Balance", col: "text-black-500", amount: 90000 },
  ];
  const DashboardData: cardOptions[] = [
    {
      title: "Total Sales",
      col: "text-black-500",
      amount: 10000,
      currency: true,
    },
    {
      title: "Active Costumers",
      col: "text-black-500",
      amount: 24,
      currency: false,
    },
    {
      title: "Inventory Items",
      col: "text-black-500",
      amount: 30,
      currency: false,
    },
    {
      title: "Monthly Revenue",
      col: "text-black-500",
      amount: 10000,
      currency: true,
    },
  ];
  return (
    <div className="bg-slate-200 w-full rounded-md border border-t-slate-300 shadow-md flex flex-col">
      <div className="h-16 bg-slate-100 rounded-md flex justify-between items-center ">
        <div className="font-bold text-lg ml-5">
          {/* Navigation */}
          {title}
        </div>

        {title === "Ledger" && (
          <div className="flex gap-6 mr-10">
            <DateButton />
            <FilterButton />
          </div>
        )}

        {title === "Customer" && (
          <div className="mr-10">
            <Link to="/addCustomer">
            <AddCustomerButton />
            </Link>
          </div>
        )}

        {
          title === "Inventory"&&(
            <div  className="mr-10">
               <AddProductsButton/>
            </div>
          )
        }
      </div>
      {title === "Ledger" && (
        <div className="flex h-24 bg-slate-100 ">
          {cardData.map((data) => (
            <div key={data.title} className="flex flex-grow m-3">
              <Card title={data.title} col={data.col} amount={data.amount} />
            </div>
          ))}
        </div>
      )}
      {title === "Customer" && <SearchBar></SearchBar>}
      {title === "Dashboard" && (
        <div className="flex h-24 bg-slate-100 ">
          {DashboardData.map((data) => (
            <div key={data.title} className="flex flex-grow m-3">
              <Card
                title={data.title}
                col={data.col}
                amount={data.amount}
                currency={data.currency}
              />
            </div>
          ))}
        </div>
      )}
      <div>
        {/* Third div */}
        {title === "Ledger" && <Table category={"Ledger"}></Table>}
        {title === "Customer" && <Table category={"Customer"}></Table>}
      </div>
    </div>
  );
};

export default MainCard;

interface Data {
  title: "Ledger" | "Customer" | "Transactions" | "Dashboard" | "Inventory";
}


function AddCustomerButton() {
  return (
      <div className="bg-cyan-900 flex items-center gap-3 text-white font-bold py-1 px-3 rounded ">
        {" "}
        <LuPlus size={20} />
        Add costumer
      </div>
  );
}

function AddProductsButton() {
  return (
    <Link to="/addProduct">
      <button className="bg-blue-600 flex items-center gap-2  text-white   px-3 rounded ">
        {" "}
        <LuPlus size={20} />
        Add Inventory
      </button>
    </Link>
  );
}