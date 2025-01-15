import TableHeader, { BarCodeTableHeader } from "./TableHeader.js";
import TableRows from "./TableRows.js";
import { CustomerTableHeader } from "./TableHeader.js";
import { CustomerTableRows } from "./TableRows.js";
import { useState } from "react";
import SearchBar from "./SearchBar.js";

interface tableType {
  category: "Ledger" | "Customer" | "Transactions" | "Barcode";
}

const customerData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "9876543210",
    balance: 45000,
    action: "paid",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "1234567890",
    balance: 32000,
    action: "pending",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.b@example.com",
    phone: "2345678901",
    balance: 25000,
    action: "will pay",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.p@example.com",
    phone: "3456789012",
    balance: 60000,
    action: "paid",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan.h@example.com",
    phone: "4567890123",
    balance: 15000,
    action: "pending",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "fiona.g@example.com",
    phone: "5678901234",
    balance: 10000,
    action: "paid",
  },
  {
    id: 7,
    name: "George Michaels",
    email: "george.m@example.com",
    phone: "6789012345",
    balance: 80000,
    action: "will pay",
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.b@example.com",
    phone: "7890123456",
    balance: 55000,
    action: "pending",
  },
  {
    id: 9,
    name: "Ian Wright",
    email: "ian.w@example.com",
    phone: "8901234567",
    balance: 42000,
    action: "paid",
  },
  {
    id: 10,
    name: "Jessica Pearson",
    email: "jessica.p@example.com",
    phone: "9012345678",
    balance: 47000,
    action: "pending",
  },
  {
    id: 11,
    name: "Kevin Malone",
    email: "kevin.m@example.com",
    phone: "1122334455",
    balance: 53000,
    action: "will pay",
  },
  {
    id: 12,
    name: "Laura Palmer",
    email: "laura.p@example.com",
    phone: "2233445566",
    balance: 90000,
    action: "paid",
  },
  {
    id: 13,
    name: "Michael Scott",
    email: "michael.s@example.com",
    phone: "3344556677",
    balance: 70000,
    action: "pending",
  },
  {
    id: 14,
    name: "Nina Dobrev",
    email: "nina.d@example.com",
    phone: "4455667788",
    balance: 60000,
    action: "will pay",
  },
  {
    id: 15,
    name: "Oliver Queen",
    email: "oliver.q@example.com",
    phone: "5566778899",
    balance: 80000,
    action: "paid",
  },
  {
    id: 16,
    name: "Paula Abdul",
    email: "paula.a@example.com",
    phone: "6677889900",
    balance: 100000,
    action: "pending",
  },
  {
    id: 17,
    name: "Quincy Adams",
    email: "quincy.a@example.com",
    phone: "7788990011",
    balance: 110000,
    action: "paid",
  },
  {
    id: 18,
    name: "Rachel Green",
    email: "rachel.g@example.com",
    phone: "8899001122",
    balance: 56000,
    action: "will pay",
  },
  {
    id: 19,
    name: "Steven Tyler",
    email: "steven.t@example.com",
    phone: "9900112233",
    balance: 40000,
    action: "pending",
  },
  {
    id: 20,
    name: "Tina Fey",
    email: "tina.f@example.com",
    phone: "1011121314",
    balance: 75000,
    action: "paid",
  },
];

const Table = ({ category }: tableType) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredCustomers = customerData.filter((customer) =>
    Object.values(customer)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery)
  );

  return (
    <div>
      <div className="p-3">
        {category === "Ledger" && (
          <TableHeader
            date={"Date"}
            description={"Product"}
            category={"Category"}
            dueAmount={"Due Amount"}
            totalAmount={"Total Amount"}
            customer={"Costumer"}
          />
        )}
        {category === "Ledger" && (
          <TableRows
            date={Date.now().toString()}
            description={"Redmi note 11"}
            category={"Phone"}
            dueAmount={"3000"}
            totalAmount={"12000"}
            customer={"Tanishq kapoor"}
          ></TableRows>
        )}
        {category === "Ledger" && (
          <TableRows
            date={Date.now().toString()}
            description={"Roti maker"}
            category={"household"}
            dueAmount={"3000"}
            totalAmount={"5000"}
            customer={"Kundan singh"}
          ></TableRows>
        )}
        {category === "Ledger" && (
          <TableRows
            date={Date.now().toString()}
            description={"Asus aptop"}
            category={"laptop"}
            dueAmount={"10000"}
            totalAmount={"100000"}
            customer={"Abhishek raj"}
          ></TableRows>
        )}
        {category === "Ledger" && (
          <TableRows
            date={Date.now().toString()}
            description={"macbook"}
            category={"laptop "}
            dueAmount={"50000"}
            totalAmount={"90000"}
            customer={"Saksham Kapoor"}
          ></TableRows>
        )}
        {category === "Customer" && (
          <div>
          <SearchBar onSearch={handleSearch} />
          <CustomerTableHeader />
          <div className="h-[68vh] overflow-y-auto">
            {filteredCustomers.map((customer) => (
              <CustomerTableRows
                key={customer.id}
                name={customer.name}
                email={customer.email}
                phone={customer.phone}
                balance={customer.balance}
                actions={customer.action}
              />
            ))}
          </div>
        </div>
      )}

      {category === "Barcode" && <BarCodeTableHeader />}
      </div>
    </div>
  );
};

export default Table;
