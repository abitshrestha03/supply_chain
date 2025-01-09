// Install dependencies first by running `npm install react-icons`
// Import required libraries
import { FiEdit } from "react-icons/fi";
import ProductCard from "../../components/Cards/ProductCard";
import ProductSalesGraph from "../../components/Charts/ProductSalesGraph";
import { useNavigate } from "react-router-dom";

const RestockProduct = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-6">
          <h1 className="text-xl font-semibold">Restock Product</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-600" onClick={() => navigate('/inventory/edit-inventory')}>
            <FiEdit /> Edit Product
          </button>
        </div>
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg">

        {/* Content */}
        <div className="grid grid-cols-3 gap-6 p-6">
          <div className="col-span-2">
            {/* Product Info */}
            <ProductCard />
          </div>

          <div className="col-span-1 border rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800">
              Product Sales Statistics
            </h3>
            <div className="mt-2">
              <p className="text-4xl font-bold text-gray-900 mb-2">39 Units</p>
              <p className="text-sm text-green-600 flex items-center">
                <span className="mr-1">+9.3%</span> <span>&#x2191;</span>{" "}
                <span className="ml-1">vs Last month</span>
              </p>
            </div>
            <div className="mt-4">
              {/* Chart Placeholder */}
              <ProductSalesGraph />
            </div>
          </div>

          {/* Product Sales Description */}
          <div className="col-span-2 border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Product Description</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          {/* Restock Variants */}
          <div className="col-span-1 border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Restock Variants</h3>
            <div className="space-y-4">
              {/* Variants */}
              <div className="flex items-center gap-4">
                <select className="flex-1 px-4 py-2 border rounded-md">
                  <option>Almond</option>
                  <option>Aloevera</option>
                </select>
                <select className="flex-1 px-4 py-2 border rounded-md">
                  <option>15 oz</option>
                  <option>30 oz</option>
                </select>
                <input
                  type="number"
                  placeholder="Units"
                  className="w-20 px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex items-center gap-4">
                <select className="flex-1 px-4 py-2 border rounded-md">
                  <option>Variant</option>
                </select>
                <select className="flex-1 px-4 py-2 border rounded-md">
                  <option>Variant</option>
                </select>
                <input
                  type="number"
                  placeholder="Units"
                  className="w-20 px-4 py-2 border rounded-md"
                />
              </div>
              {/* Add Variant Button */}
              <button className="w-full px-4 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-600">
                + Add Variant
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="p-6 border-t flex justify-end">
          <button className="px-6 py-2 bg-custom-blue text-white rounded-md hover:bg-blue-600">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestockProduct;
