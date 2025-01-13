// import React, { useState } from "react";

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log("Searching for:", searchQuery);
//     // Add your search functionality here
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center p-5">
//       <label htmlFor="voice-search" className="sr-only">
//         Search
//       </label>
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
//         <input
//           type="text"
//           id="voice-search"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
//           placeholder="Search customer..."
//           required
//           value={searchQuery}
//           onChange={handleInputChange}
//         />
//         <button
//           type="submit"
//           className="absolute inset-y-0 right-0 flex items-center pr-3"
//         >
//           <svg
//             className="w-4 h-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 16 20"
//             role="img"
//             aria-label="submit search"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
//             />
//           </svg>
//         </button>
//       </div>
//       <button
//         type="submit"
//         className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
//       >
//         <svg
//           className="w-4 h-4 mr-2"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 20 20"
//           role="img"
//           aria-label="search icon"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//           />
//         </svg>
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;

import React, {useState} from "react";

function SearchBar(){
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <form className="w-full flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search Customer..."
          value={searchQuery}
          onChange={handleChange}
          className="h-[2rem] w-full ml-[1rem] pl-[1rem] border border-gray-400 text-gray-800 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="border border-black mx-2 rounded-lg">Search</button>
      </form>
    </>
  );
}

export default SearchBar;