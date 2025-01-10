import { useState } from "react";
import MetricCard from "../../components/Cards/MetricCard";
// import StockAvailabilityChart from "../../components/Charts/StockAvailabilityChart";
import AddShipmentModal from "../Shipment/NewShipmentModal";
import FilterIcon from "../../assets/icons/FilterIcon";
import ExportIcon from "../../assets/icons/ExportIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import TabNavigation from "../../components/Tabs/TabNavigation";

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [inventoryData] = useState([
    {
      FKU: "ABC-2429Z",
      Product: "Wai Wai Noodles",
      Category: "Food & Beverages",
      Price: "Rs 200.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Coca-Cola",
      Category: "Food & Beverages",
      Price: "Rs 30.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Pain Relievers",
      Category: "Healthcare Products",
      Price: "Rs 13.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Cold Cream",
      Category: "Cosmetics",
      Price: "Rs 10.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Toilet Papers",
      Category: "Home Care Products",
      Price: "Rs 35.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Skincare Products",
      Category: "Cosmetics",
      Price: "Rs 10.00",
      Stock: 24,
    },
    {
      FKU: "ABC-2429Z",
      Product: "Packaged Beans",
      Category: "Food & Beverages",
      Price: "Rs 22.00",
      Stock: 24,
    },
  ]);

  const tabs = [
    "All",
    "High Stock",
    "Low Stock",
    "Out of Stock",
  ];

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full  min-h-screen flex flex-col px-4 md:py-4 md:mt-16">
      <div className="flex flex-wrap justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
            className="bg-[#003DFF] ms:text-[12px] md:text-lg text-white rounded-md shadow-lg px-4 py-2 ms:mt-4 md:mt-0"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Product
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          <MetricCard title="Total Inventory" value="$ 520,000" />
          <MetricCard title="Units on Hand" value="1,200" />
          <MetricCard title="Units on Order" value="3,000" />
          <MetricCard title="Units to Reorder" value="500" />
        </div>
      </div>

      <div className="py-4">
        <TabNavigation tabs={tabs} />
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        {/* Header Controls */}
        <div className="flex justify-between items-center mb-4">
          {/* Stock Filters */}

          {/* Search and Actions */}
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="w-[25vw] shadow-md">
              <input
                type="text"
                placeholder="Search Salesperson..."
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 "
              />
            </div>
            <div className="buttons flex gap-2">
              <button className="bg-gray rounded-md shadow-lg ms:px-2 md:px-4 md:py-2 flex items-center gap-2">
                <SlCalender />
                <span className="ms:text-xs md:text-sm ml-1 font-normal">
                  28 Dec 24 - 10 Jan 25
                </span>
                <IoIosArrowDown />
              </button>
              <button className="bg-gray rounded-md shadow-lg ms:px-2 md:px-4 md:py-2 flex items-center">
                <FilterIcon />
                <span className="ms:text-xs md:text-sm ml-1 font-normal">
                  Filter
                </span>
              </button>
              <button className="bg-gray rounded-md shadow-lg ms:px-2 ms:py-2 md:px-4 md:py-2 flex items-center">
                <ExportIcon />
                <span className="ms:text-xs md:text-sm ml-1 font-normal">
                  Export
                </span>
              </button>
              <button className="bg-gray rounded-md shadow-lg md:px-2 md:py-2 flex items-center">
                <ThreeDots />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-gray-100 text-sm font-semibold text-gray-600">
              <tr>
                <th className="py-3 px-4 border-b">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="py-3 px-4 border-b text-left">FKU</th>
                <th className="py-3 px-4 border-b text-left">Product</th>
                <th className="py-3 px-4 border-b text-left">Category</th>
                <th className="py-3 px-4 border-b text-left">Price</th>
                <th className="py-3 px-4 border-b text-left">Stock</th>
                <th className="py-3 px-4 border-b text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors border-b"
                >
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-3 px-4">{item.FKU}</td>
                  <td className="py-3 px-4">{item.Product}</td>
                  <td className="py-3 px-4">{item.Category}</td>
                  <td className="py-3 px-4">{item.Price}</td>
                  <td className="py-3 px-4">{item.Stock}</td>
                  <td className="py-3">
                    <button
                      className="text-blue-500 hover:underline text-sm underline"
                      onClick={() => navigate("/inventory/restock")}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Shipment Modal */}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Inventory;
