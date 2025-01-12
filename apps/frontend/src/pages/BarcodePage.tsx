import React, { useState } from "react";
import JsBarcode from "jsbarcode";
import { jsPDF } from "jspdf";
import { Appbar, Sidebar, MainCard } from "@repo/ui/index";

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

  const loadMoreBarcodes = () => {
    const additionalBarcodes = barcodes.slice(visibleBarcodes.length, visibleBarcodes.length + barcodeLimit);
    setVisibleBarcodes((prev) => [...prev, ...additionalBarcodes]);
  };

  return (
    <div>
      <Appbar></Appbar>

      <div className="flex w-full">
      <Sidebar></Sidebar>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1 style={{ color: "#000", fontWeight: "bold" }}>Generate barcodes</h1>
          <p style={{ fontStyle: "italic", color: "#555" }}>
            Generate clean and professional barcodes ready for printing.
          </p>

          <div
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <label>
              <strong>Item Name:</strong>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <strong>No. of Labels:</strong>
              <input
                type="number"
                value={numLabels}
                onChange={(e) => setNumLabels(e.target.value)}
                placeholder="Enter number of labels"
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <strong>Barcode Width (mm):</strong>
              <input
                type="number"
                value={barcodeWidth}
                onChange={(e) => setBarcodeWidth(Number(e.target.value))}
                placeholder="Width"
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <strong>Barcode Height (mm):</strong>
              <input
                type="number"
                value={barcodeHeight}
                onChange={(e) => setBarcodeHeight(Number(e.target.value))}
                placeholder="Height"
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
            <label style={{ marginLeft: "20px" }}>
              <strong>Printer Type:</strong>
              <select
                value={printerType}
                onChange={(e) => setPrinterType(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              >
                <option value="A4">A4 Printer</option>
                <option value="SingleCell">Single-Cell Printer</option>
              </select>
            </label>
            <button
              onClick={generateRandomBarcode}
              style={{
                marginLeft: "20px",
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Generate Barcodes
            </button>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={handleDownloadPDF}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Download PDF
            </button>
          </div>

          <table
            border={1}
            style={{
              width: "100%",
              marginBottom: "20px",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5", color: "#000" }}>
                <th style={{ padding: "10px" }}>Item Name</th>
                <th style={{ padding: "10px" }}>Barcode</th>
              </tr>
            </thead>
            <tbody>
              {visibleBarcodes.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px" }}>{item.itemName}</td>
                  <td style={{ padding: "10px" }}>{item.barcode}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {visibleBarcodes.length < barcodes.length && (
            <button
              onClick={loadMoreBarcodes}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarcodePage;
