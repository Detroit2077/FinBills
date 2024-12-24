import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import {CustomerTableHeader} from "./TableHeader";    
import {CustomerTableRows} from "./TableRows";

interface tableType{
    category: "Ledger" | "Customer" |"Transactions";
}
const Table = ({category}:tableType) => {
    console.log("table file..")
    return <div>
        <div className="p-3">
        {(category ==="Ledger") && <TableHeader date={"Date"} description ={"Product"} category = {"Category"} dueAmount ={"Due Amount"}  totalAmount = {"Total Amount"} customer={"Costumer"}/>}
        {(category === "Ledger")&&<TableRows date={Date.now().toString()} description ={"Redmi note 11"} category = {"Phone"} dueAmount ={"3000"}  totalAmount = {"12000"} customer={"Tanishq kapoor"} ></TableRows>}
        {(category === "Ledger")&&<TableRows date={Date.now().toString()} description ={"Roti maker"} category = {"household"} dueAmount ={"3000"}  totalAmount = {"5000"} customer={"Kundan singh"} ></TableRows>}
        {(category === "Ledger")&&<TableRows date={Date.now().toString()} description ={"Asus aptop"} category = {"laptop"} dueAmount ={"10000"}  totalAmount = {"100000"} customer={"Abhishek raj"} ></TableRows>}
        {(category === "Ledger")&&<TableRows date={Date.now().toString()} description ={"macbook"} category = {"laptop "} dueAmount ={"50000"}  totalAmount = {"90000"} customer={"Saksham Kapoor"} ></TableRows>}
       
       {
        (category === "Customer") && <CustomerTableHeader></CustomerTableHeader>
       }
       {
        (category === "Customer") && <CustomerTableRows name={"John Doe"} email={"john.doe@example.com"} phone={"123-456-7890"} balance={50000} actions={"will pay"}/>
       }

      </div>
    </div>;
}


export default Table;