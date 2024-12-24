function Card({ title, amount, col , currency= false}: Details) {
    return (
      <div
        className={`flex-grow pt-4 pl-4 pb-10 rounded-md shadow-md bg-slate-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out`}
      >
        {/* Content */}
        <p className="text-l font-semibold text-slate-500">{title}</p>
        {currency ? <h2 className={`text-lg ${col}`}>₹{amount}</h2> : <h2 className={`text-lg ${col}`}>{amount}</h2>}
      </div>
    );
  }
  
  
  interface Details {
    title: string;
    amount: number;
    col: string;
    currency?:boolean;
  }

  export default Card;

