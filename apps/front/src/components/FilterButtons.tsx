export const FilterButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
      >
        <svg
          className="w-5 h-5 mr-2 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 16 3 12 10 8 3 2 3 10 16 10 21 14 21 14 16 22 3"></polygon>
        </svg>
        Filters
      </button>
    </div>
  );
};



const DateButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="flex items-center justify-center px-4 py-2 bg-white text-gray-800 font-medium rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200"
      >
        <svg
          className="w-5 h-5 mr-2 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Select Date Range
      </button>
    </div>
  );
};

export default DateButton;
