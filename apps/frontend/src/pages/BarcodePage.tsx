import React, { useState, useEffect } from "react";
import JsBarcode from "jsbarcode";
import { jsPDF } from "jspdf";
import { Appbar, Sidebar } from "@repo/ui/index";

interface Barcode {
  itemName: string;
  barcode: string;
}

const BarcodePage: React.FC = () => {
  const [itemName, setItemName] = useState<string>("");
  const [numLabels, setNumLabels] = useState<string>("");
  const [barcodeWidth, setBarcodeWidth] = useState<number>(50);
  const [barcodeHeight, setBarcodeHeight] = useState<number>(30);
  const [printerType, setPrinterType] = useState<string>("A4");
  const [barcodes, setBarcodes] = useState<Barcode[]>([]);

  const generateRandomBarcode = () => {
    if (!itemName || !numLabels) {
      alert("Please fill in all fields.");
      return;
    }

    const newBarcodes: Barcode[] = [];
    for (let i = 0; i < parseInt(numLabels); i++) {
      const uniqueBarcode = `${itemName}-${Math.random()
        .toString(36)
        .substring(2, 10)}`;
      newBarcodes.push({ itemName, barcode: uniqueBarcode });
    }

    setBarcodes((prev) => [...prev, ...newBarcodes]);
    setItemName("");
    setNumLabels("");
  };

  const handleDownloadPDF = () => {
    if (barcodes.length === 0) {
      alert("No barcodes to generate PDF!");
      return;
    }

    const doc = new jsPDF(
      "portrait",
      "mm",
      printerType === "A4" ? "a4" : [50, 50]
    );
    const pageWidth = printerType === "A4" ? 210 : 50;
    const pageHeight = printerType === "A4" ? 297 : 50;
    const margin = 10;
    const cellPadding = 5;

    const cellWidth = barcodeWidth + cellPadding * 2;
    const cellHeight = barcodeHeight + cellPadding * 2;

    const numCols = Math.floor((pageWidth - margin * 2) / cellWidth);
    const numRows = Math.floor((pageHeight - margin * 2) / cellHeight);

    let xOffset = margin;
    let yOffset = margin;

    barcodes.forEach((item) => {
      const { itemName, barcode } = item;

      const canvas = document.createElement("canvas");
      JsBarcode(canvas, barcode, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 40,
        displayValue: true,
        fontSize: 12,
        text: `${itemName}`,
      });

      const barcodeImage = canvas.toDataURL("image/png");

      doc.addImage(
        barcodeImage,
        "PNG",
        xOffset + cellPadding,
        yOffset + cellPadding,
        barcodeWidth,
        barcodeHeight
      );

      xOffset += cellWidth;

      if (xOffset + cellWidth > pageWidth - margin) {
        xOffset = margin;
        yOffset += cellHeight;

        if (yOffset + cellHeight > pageHeight - margin) {
          doc.addPage();
          xOffset = margin;
          yOffset = margin;
        }
      }
    });

    doc.save("barcodes.pdf");
  };

  return (
    <div className="max-h-screen overflow-hidden">
      <Appbar />
      <div className="h-screen flex">
        <Sidebar />
        {/* Main Content */}
        <div className="w-full m-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Generate Barcodes
          </h1>
          <p className="text-gray-600 mb-6">
            Create clean and professional barcodes ready for printing.
          </p>

          {/* Form Section */}
          <div className="bg-white border shadow-md rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="mt-1 border border-gray-400 w-full rounded-md shadow-sm p-2"
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  No. of Labels
                </label>
                <input
                  type="number"
                  value={numLabels}
                  onChange={(e) => setNumLabels(e.target.value)}
                  className="mt-1 border border-gray-400 w-full rounded-md shadow-sm p-2"
                  placeholder="Enter number of labels"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Barcode Width (mm):
                </label>
                <input
                  type="number"
                  value={barcodeWidth}
                  onChange={(e) => setBarcodeWidth(Number(e.target.value))}
                  className="mt-1 border border-gray-400 w-full rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Barcode Height (mm):
                </label>
                <input
                  type="number"
                  value={barcodeHeight}
                  onChange={(e) => setBarcodeHeight(Number(e.target.value))}
                  className="mt-1 border border-gray-400 w-full rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Printer Type
                </label>
                <select
                  value={printerType}
                  onChange={(e) => setPrinterType(e.target.value)}
                  className="mt-1 border border-gray-400 w-full rounded-md shadow-sm p-2"
                >
                  <option value="A4">A4 Printer</option>
                  <option value="SingleCell">Single-Cell Printer</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-evenly">
              <button
                onClick={generateRandomBarcode}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
              >
                Generate Barcodes
              </button>
              <button
                onClick={handleDownloadPDF}
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700"
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Barcode Table */}
          <div className="grid grid-cols-2 bg-slate-600 text-white font-semibold rounded-t-lg">
            <div className="px-4 py-2">Item Name</div>
            <div className="px-4 py-2">Barcode</div>
          </div>
          <div
            id="barcode-container"
            className="overflow-y-auto max-h-[400px] border rounded-b-lg"
          >
            {barcodes.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 hover:bg-gray-100 border-b border-slate-300"
              >
                <div className="px-4 py-2 border-r border-slate-300">
                  {item.itemName}
                </div>
                <div className="px-4 py-2 border-r border-slate-300">
                  {item.barcode}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodePage;

// import React, { useState } from "react";
// import JsBarcode from "jsbarcode";
// import { jsPDF } from "jspdf";
// import { Appbar, Sidebar, MainCard } from "@repo/ui/index";

// // Define types for state
// interface Barcode {
//   itemName: string;
//   barcode: string;
// }

// const BarcodePage: React.FC = () => {
//   const [itemName, setItemName] = useState<string>("");
//   const [numLabels, setNumLabels] = useState<string>("");
//   const [barcodeWidth, setBarcodeWidth] = useState<number>(50);
//   const [barcodeHeight, setBarcodeHeight] = useState<number>(30);
//   const [printerType, setPrinterType] = useState<string>("A4");
//   const [barcodes, setBarcodes] = useState<Barcode[]>([]);
//   const [visibleBarcodes, setVisibleBarcodes] = useState<Barcode[]>([]); // State to control the visible barcodes
//   const [barcodeLimit] = useState<number>(10); // Limit the number of visible barcodes

//   const generateRandomBarcode = () => {
//     if (!itemName || !numLabels) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const newBarcodes: Barcode[] = [];
//     for (let i = 0; i < parseInt(numLabels); i++) {
//       const uniqueBarcode = `${itemName}-${Math.random()
//         .toString(36)
//         .substring(2, 10)}`;
//       newBarcodes.push({
//         itemName,
//         barcode: uniqueBarcode,
//       });
//     }

//     setBarcodes((prevBarcodes) => [...prevBarcodes, ...newBarcodes]);
//     setItemName("");
//     setNumLabels("");
//     setVisibleBarcodes((prev) => [
//       ...prev,
//       ...newBarcodes.slice(0, barcodeLimit),
//     ]); // Display only a limited number of new barcodes
//   };

//   const handleDownloadPDF = () => {
//     if (barcodes.length === 0) {
//       alert("No barcodes to generate PDF!");
//       return;
//     }

//     const doc = new jsPDF(
//       "portrait",
//       "mm",
//       printerType === "A4" ? "a4" : [50, 50]
//     );
//     const pageWidth = printerType === "A4" ? 210 : 50;
//     const pageHeight = printerType === "A4" ? 297 : 50;
//     const margin = 10;
//     const cellPadding = 5;

//     const cellWidth = barcodeWidth + cellPadding * 2;
//     const cellHeight = barcodeHeight + cellPadding * 2;

//     const numCols = Math.floor((pageWidth - margin * 2) / cellWidth);
//     const numRows = Math.floor((pageHeight - margin * 2) / cellHeight);

//     let xOffset = margin;
//     let yOffset = margin;

//     barcodes.forEach((item, index) => {
//       const { itemName, barcode } = item;

//       const canvas = document.createElement("canvas");
//       JsBarcode(canvas, barcode, {
//         format: "CODE128",
//         lineColor: "#000",
//         width: 2,
//         height: 40,
//         displayValue: true,
//         fontSize: 12,
//         text: `${itemName}`,
//       });

//       const barcodeImage = canvas.toDataURL("image/png");

//       doc.addImage(
//         barcodeImage,
//         "PNG",
//         xOffset + cellPadding,
//         yOffset + cellPadding,
//         barcodeWidth,
//         barcodeHeight
//       );

//       xOffset += cellWidth;

//       if (xOffset + cellWidth > pageWidth - margin) {
//         xOffset = margin;
//         yOffset += cellHeight;

//         if (yOffset + cellHeight > pageHeight - margin) {
//           doc.addPage();
//           xOffset = margin;
//           yOffset = margin;
//         }
//       }
//     });

//     doc.save("barcodes.pdf");
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       <Appbar />
//       <div className="flex h-full overflow-hidden">
//         {/* Sidebar with fixed width */}
//         <Sidebar className="w-64 h-full bg-gray-200" />
//         {/* Main content with flexible width */}
//         <div className="flex-1 overflow-y-auto p-4">
//           <h1 className="font-bold text-2xl text-slate-700 mb-5">
//             Generate barcodes
//           </h1>

//           <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm">
//             <div className="flex flex-wrap gap-4">
//               <label>
//                 <strong>Item Name:</strong>
//                 <input
//                   type="text"
//                   value={itemName}
//                   onChange={(e) => setItemName(e.target.value)}
//                   placeholder="Enter item name"
//                   className="border rounded-md px-2 py-1 ml-2"
//                 />
//               </label>

//               <label>
//                 <strong>No. of Labels:</strong>
//                 <input
//                   type="number"
//                   value={numLabels}
//                   onChange={(e) => setNumLabels(e.target.value)}
//                   placeholder="Enter number of labels"
//                   className="border rounded-md px-2 py-1 ml-2"
//                 />
//               </label>

//               <label>
//                 <strong>Barcode Width (mm):</strong>
//                 <input
//                   type="number"
//                   value={barcodeWidth}
//                   onChange={(e) => setBarcodeWidth(Number(e.target.value))}
//                   className="border rounded-md px-2 py-1 ml-2"
//                 />
//               </label>

//               <label>
//                 <strong>Barcode Height (mm):</strong>
//                 <input
//                   type="number"
//                   value={barcodeHeight}
//                   onChange={(e) => setBarcodeHeight(Number(e.target.value))}
//                   className="border rounded-md px-2 py-1 ml-2"
//                 />
//               </label>

//               <label>
//                 <strong>Printer Type:</strong>
//                 <select
//                   value={printerType}
//                   onChange={(e) => setPrinterType(e.target.value)}
//                   className="border rounded-md px-2 py-1 ml-2"
//                 >
//                   <option value="A4">A4 Printer</option>
//                   <option value="SingleCell">Single-Cell Printer</option>
//                 </select>
//               </label>
//             </div>

//             <button
//               onClick={generateRandomBarcode}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Generate
//             </button>
//           </div>

//           <div
//             onClick={handleDownloadPDF}
//             className="mb-6 w-40 cursor-pointer p-3 text-center font-bold bg-green-900 text-white  rounded-md hover:bg-green-700 "
//           >
//             Download PDF
//           </div>

//           <div className="overflow-y-auto max-h-[450px] border border-gray-300 rounded-lg">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2">Item Name</th>
//                   <th className="p-2">Barcode</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleBarcodes.map((item, index) => (
//                   <tr key={index} className="odd:bg-gray-50 even:bg-white">
//                     <td className="p-2">{item.itemName}</td>
//                     <td className="p-2">{item.barcode}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarcodePage;