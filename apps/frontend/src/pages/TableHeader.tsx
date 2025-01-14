interface TableHeaderProps {
    date: string;
    description: string;
    category: string;
    dueAmount: string;
    totalAmount: string;
    customer: string;
  }
  
  function TableHeader({
    date,
    description,
    category,
    dueAmount,
    totalAmount,
    customer,
  }: TableHeaderProps) {
    return (
      <div className="grid grid-cols-6 bg-slate-600 text-white font-semibold rounded-t-lg">
        <div className="px-4 py-2">{date}</div>
        <div className="px-4 py-2">{description}</div>
        <div className="px-4 py-2">{category}</div>
        <div className="px-4 py-2">{dueAmount}</div>
        <div className="px-4 py-2">{totalAmount}</div>
        <div className="px-4 py-2">{customer}</div>
      </div>
    );
  }
  
  export default TableHeader;
  