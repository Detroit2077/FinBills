import { useState } from "react";

const AddCustomer = () => {
  const [productDetails, setProductDetails] = useState({
    itemName: "",
    description: "",
    p_price: 0.0,
    s_price: 0.0,
    stock_number: 0,
    mrp: 0,
    hsn: "",
    gst_rate: "",
    barcode: "",
    unit: "",
    alert_quantity: "",
    opening_stock: "",
    op_stock_date: "",
    img_url: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const generateBarcode = () => {
    const barcode = Math.random().toString(36).substring(2, 12).toUpperCase();
    setProductDetails((prev) => ({ ...prev, barcode }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Product Details:", productDetails);
  };

  return (
    <div className="w-screen h-full ">
      <div className="max-w-screen-xl  bg-white px-6 rounded-lg  mx-36">
        <div className="flex justify-between items-center m-6">
          <div className="font-bold text-lg">Add Product</div>
          <button className="text-white w-32 text-sm font-bold bg-blue-600 rounded-md px-4 py-2">
            Save
          </button>
        </div>

        <div className="w-full h-0.5 bg-gray-200 mb-6"></div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-rows-6 ">
            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={productDetails.itemName}
                onChange={handleChange}
                className="mt-1 block  w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter item name"
              />
            </div>

            {/* Purchase Price */}
            <div className="flex gap-10">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Purchase Price
                </label>
                <input
                  type="number"
                  name="p_price"
                  value={productDetails.p_price}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter purchase price"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Selling Price
                </label>
                <input
                  type="number"
                  name="s_price"
                  value={productDetails.s_price}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter selling price"
                />
              </div>
            </div>
            {/* Unit Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Unit
              </label>
              <select
                name="unit"
                value={productDetails.unit}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select unit</option>
                <option value="kg">Kilogram</option>
                <option value="pcs">Pieces</option>
                <option value="ltr">Liter</option>
              </select>
            </div>

            {/* GST Rate Dropdown */}
            <div className="flex gap-10">

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                GST Rate
              </label>
              <select
                name="gst_rate"
                value={productDetails.gst_rate}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md px-9"
              >
                <option value="">Select GST rate</option>
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                  HSN Code
                </label>
                <input
                  type="number"
                  name="s_price"
                  value={productDetails.s_price}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter selling price"
                />
              </div>


            </div>
           

            {/* Stock Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                name="stock_number"
                value={productDetails.stock_number}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter stock number"
              />
            </div>

            {/* Barcode */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Barcode
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="barcode"
                  value={productDetails.barcode}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Generated barcode"
                  readOnly
                />
                <button
                  type="button"
                  onClick={generateBarcode}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Alert Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alert Quantity
              </label>
              <input
                type="number"
                name="alert_quantity"
                value={productDetails.alert_quantity}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter alert quantity"
              />
            </div>

            <div className="flex gap-10">
    <div>
    <label className="block text-sm font-medium text-gray-700">
                    Opening Stock Date
                </label>
                <input
                    type="date"
                    name="op_stock_date"
                    value={productDetails.op_stock_date}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter opening stock date"
                />
    </div>
 
            
            
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Opening Stock
                </label>
                <input
                    type="number"
                    name="opening_stock"
                    value={productDetails.opening_stock}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter opening stock"
                />
            </div>

</div>
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 row-span-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md h-full"
                placeholder="Enter description"
              />
            </div>

            <div className="col-span-1 row-span-3">
              <label className="block text-sm font-medium text-gray-700">Product Image</label>
              <input
                type="file"
                name="img_url"
                // onChange={handleImageUpload}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>


           

            {/* Selling Price */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
