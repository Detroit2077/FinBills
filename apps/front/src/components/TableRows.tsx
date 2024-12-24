interface TableRowProps {
    date: string;
    description: string;
    category: string;
    dueAmount: string;
    totalAmount: string;
    customer: string;
  }
  
  function TableRows({
    date,
    description,
    category,
    dueAmount,
    totalAmount,
    customer,
  }: TableRowProps) {
    return (
      <div className="grid grid-cols-6 hover:bg-gray-100 border-b border-slate-300">
        <div className="px-4 py-2 border-r border-slate-300">{date}</div>
        <div className="px-4 py-2 border-r border-slate-300">{description}</div>
        <div className="px-4 py-2 border-r border-slate-300">{category}</div>
        <div className="px-4 py-2 border-r border-slate-300">{dueAmount}</div>
        <div className="px-4 py-2 border-r border-slate-300">{totalAmount}</div>
        <div className="px-4 py-2">{customer}</div>
      </div>
    );
  }
  

interface CustomerTableRowProps{
    name: string;
    email: string;
    phone: string;
    balance: number;
    actions: string
}
  export function CustomerTableRows({name, email, phone,balance, actions} : CustomerTableRowProps){
    return (
        <div className="grid grid-cols-6 hover:bg-gray-100 border-b border-slate-300">
          <div className="px-4 py-2 border-r border-slate-300">{name}</div>
          <div className="px-4 py-2 border-r border-slate-300">{email}</div>
          <div className="px-4 py-2 border-r border-slate-300">{phone}</div>
          <div className="px-4 py-2 border-r border-slate-300">{balance}</div>
          <div className="px-4 py-2  border-slate-300">{actions}</div>
        </div>
      );
  }
  export default TableRows;
  