import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AddCustomer = () => {
  const [productDetails, setProductDetails] = useState({
    customerName: "",
    description: "",
    phone: "",
    gst_no: "",
    email:"",
    address: "",
    op_account_date: "",
    amount_due: 0,
  });
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Product Details:", productDetails);
  };

  return (
    <div className="w-screen h-screen pt-16 overflow-x-hidden">
      <div className="max-w-screen-xl  bg-white px-6 rounded-lg  mx-36 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center m-6">
          <FaArrowLeft
            size={30}
            color="grey"
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className="font-bold text-2xl text-slate-600">Add Customer</div>

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
                Customer's Name
              </label>
              <input
                type="text"
                name="customerName"
                value={productDetails.customerName}
                onChange={handleChange}
                className="mt-1 block  w-full p-2 border border-gray-500 rounded-md"
                placeholder="Enter customers name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                GST No.
              </label>
              <input
                type="text"
                name="gstNo"
                value={productDetails.gst_no}
                onChange={handleChange}
                className="mt-1 block  w-full p-2 border border-gray-500 rounded-md"
                placeholder="Enter GST No."
              />
            </div>

            {/* Purchase Price */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 row-span-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={productDetails.description}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md h-full"
                placeholder="Enter description"
              />
            </div>

            <div>
              <PhoneInput className="mt-1 block w-full p-2 border border-gray-500 rounded-md"
                placeholder="Enter phone number"
                value={value}
                onChange={(e :any) =>setValue(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount Due
              </label>
              <input
                type="number"
                name="s_price"
                value={productDetails.amount_due}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md"
                placeholder="Enter selling price"
              />
            </div>
            <div className="flex gap-10">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Opening Date
                </label>
                <input
                  type="date"
                  name="op_stock_date"
                  value={productDetails.op_account_date}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter opening stock date"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
