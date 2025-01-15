import React, { useState } from "react";
import JsBarcode from "jsbarcode";
import { jsPDF } from "jspdf";
import { Appbar, Sidebar } from "@repo/ui/index";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Define types for state
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
  const [visibleBarcodes, setVisibleBarcodes] = useState<Barcode[]>([]); // State to control the visible barcodes
  const [barcodeLimit] = useState<number>(10); // Limit the number of visible barcodes
  const navigate = useNavigate()
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
      newBarcodes.push({
        itemName,
        barcode: uniqueBarcode,
      });
    }

    setBarcodes((prevBarcodes) => [...prevBarcodes, ...newBarcodes]);
    setItemName("");
    setNumLabels("");
    setVisibleBarcodes((prev) => [
      ...prev,
      ...newBarcodes.slice(0, barcodeLimit),
    ]); // Display only a limited number of new barcodes
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

    barcodes.forEach((item, index) => {
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
    <div className="h-screen flex flex-col">
      <Appbar />
      <div className="flex h-full overflow-hidden">
        {/* Sidebar with fixed width */}
        <Sidebar/>

        {/* Main content with flexible width */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="font-bold text-2xl  text-slate-600 mb-5  border-2 rounded-md pb-2 flex items-center gap-[40%] px-5 shadow-md p-2">
            <FaArrowLeft size={20} color="grey" onClick={()=>{navigate(-1)}} />
              <h1>Generate Barcode</h1>
            </div> 
        

          <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="flex flex-wrap gap-4">
              <label>
                <strong>Item Name:</strong>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="Enter item name"
                  className="border rounded-md px-2 py-1 ml-2"
                />
              </label>

              <label>
                <strong>No. of Labels:</strong>
                <input
                  type="number"
                  value={numLabels}
                  onChange={(e) => setNumLabels(e.target.value)}
                  placeholder="Enter number of labels"
                  className="border rounded-md px-2 py-1 ml-2"
                />
              </label>

              <label>
                <strong>Barcode Width (mm):</strong>
                <input
                  type="number"
                  value={barcodeWidth}
                  onChange={(e) => setBarcodeWidth(Number(e.target.value))}
                  className="border rounded-md px-2 py-1 ml-2"
                />
              </label>

              <label>
                <strong>Barcode Height (mm):</strong>
                <input
                  type="number"
                  value={barcodeHeight}
                  onChange={(e) => setBarcodeHeight(Number(e.target.value))}
                  className="border rounded-md px-2 py-1 ml-2"
                />
              </label>

              <label>
                <strong>Printer Type:</strong>
                <select
                  value={printerType}
                  onChange={(e) => setPrinterType(e.target.value)}
                  className="border rounded-md px-2 py-1 ml-2"
                >
                  <option value="A4">A4 Printer</option>
                  <option value="SingleCell">Single-Cell Printer</option>
                </select>
              </label>
            </div>

            <div
              onClick={generateRandomBarcode}
              className="mt-4 w-24 bg-slate-700 text-white px-4 py-1 rounded-md hover:bg-slate-600 hover:scale-100 hover:cursor-pointer"
            >
              Generate
            </div>
          </div>

          <div
            onClick={handleDownloadPDF}
            className="mb-6 w-32 cursor-pointer p-1 text-center bg-green-900 text-white  rounded-md hover:bg-green-800 hover: border border-white"
          >
            Download PDF
          </div>

          <div className="overflow-y-auto max-h-[450px] border border-gray-300 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Item Name</th>
                  <th className="p-2">Barcode</th>
                </tr>
              </thead>
              <tbody>
                {visibleBarcodes.map((item, index) => (
                  <tr key={index} className="odd:bg-gray-50 even:bg-white">
                    <td className="p-2">{item.itemName}</td>
                    <td className="p-2">{item.barcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodePage;
