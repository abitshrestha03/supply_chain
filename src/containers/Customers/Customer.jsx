import { useState } from "react";
import DashboardCard from "../../components/Cards/DashboardCards";
import Cross from "../../assets/images/cross.png";
import CustomerImage from "../../assets/images/customer.png";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import ExportIcon from "../../assets/icons/ExportIcon";
import AddShipmentModal from "../Shipment/NewShipmentModal";
import SearchBox from "../../components/Buttons/SearchBox";
import { SlArrowDown } from "react-icons/sl";

const Customer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = Array(10).fill({
    customerId: "CUS123456",
    name: "John Doe",
    customerType: "Wholesale",
    email: "johndoe21@gmail.com",
    contact: "+977-9129394567",
    address: "Kathmandu, Nepal",
  });

  const orderHistory = [
    {
      id: "ABC2429Z",
      order: "Electronics",
      date: "22/09/2024",
      payment: "Credit Card",
      fee: "$1000",
      status: "Shipping",
    },
    {
      id: "ALX0007P",
      order: "Furniture",
      date: "22/09/2024",
      payment: "Cheque",
      fee: "$1290",
      status: "Delivered",
    },
    {
      id: "TRX1129P",
      order: "Auto Parts",
      date: "22/09/2024",
      payment: "Bank Transfer",
      fee: "$3200",
      status: "Delivered",
    },
  ];

  const openPopup = (customer) => {
    setSelectedCustomer(customer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsOrderHistoryOpen(false);
  };

  const openOrderHistory = () => {
    setIsPopupOpen(false);
    setIsOrderHistoryOpen(true);
  };

  const closeOrderHistory = () => {
    setIsOrderHistoryOpen(false);
    setIsPopupOpen(true); // Reopen the customer details popup
  };

  const handleOrderSelect = (orderId) => {
    setSelectedOrders(
      (prevSelected) =>
        prevSelected.includes(orderId)
          ? prevSelected.filter((id) => id !== orderId) // Deselect if already selected
          : [...prevSelected, orderId] // Select the order
    );
  };

  // Handle "Select All" checkbox click
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]); // Deselect all
    } else {
      setSelectedOrders(orderHistory.map((order) => order.id)); // Select all
    }
    setSelectAll(!selectAll);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div className="flex flex-wrap justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
            className="bg-[#003DFF] ms:text-[12px] md:text-[16px] text-white rounded-md shadow-lg px-4 py-1 ms:mt-4 md:mt-0"
            onClick={() => setIsModalOpen(true)}
          >
            + New Customer
          </button>
        </div>
      </div>
      <div className="grid ms:grid-cols-2 md:grid-cols-4 gap-4 ms:mt-4 md:mt-8">
        <DashboardCard
          title="Total Customers"
          value="239"
          subtitle="vs Last week"
          trend={+1.3}
        />
        <DashboardCard
          title="Customer Satisfaction"
          value="94%"
          subtitle="vs Last week"
          trend={+0.92}
        />
        <DashboardCard
          title="Average Retention"
          value="89%"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Open Support Ticket"
          value="12"
          subtitle="vs Last week"
          trend={-9.02}
        />
      </div>
      <div className="flex items-center justify-between bg-white ms:p-2 md:p-4 mt-4">
        <SearchBox placeholder="Search Salesperson..." />
        <div className="buttons flex gap-2">
          <button
            className="bg-gray rounded-md px-2 py-2 flex items-center flex gap-2"
            style={{
              boxShadow: `inset 0px 4px 30px 0px #FFFFFF, 0px 2px 6px -1px #00000040`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6H5C3.89543 6 3 6.89543 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6Z"
                stroke="black"
              />
              <path
                d="M3 11H21M9 16H15M8 3V7M16 3V7"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
            <span className="ms-2 ms:text-xs md:text-[16px] font-normal">
              28 Dec 24 - 10 Jan 25
            </span>
            <SlArrowDown className="text-xs" />
          </button>
          <button
            className="bg-gray rounded-md px-2 py-2 flex items-center"
            style={{
              boxShadow: `inset 0px 4px 30px 0px #FFFFFF, 0px 2px 6px -1px #00000040`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.30078 16H11.3008"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19.8008 7H12.3008"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="17.5"
                cy="16"
                r="3.25"
                stroke="black"
                strokeWidth="1.5"
              />
              <circle cx="6" cy="7" r="3.25" stroke="black" strokeWidth="1.5" />
            </svg>
            <span className="ms-2 ms:text-xs md:text-[16px] font-normal">
              Filter
            </span>
          </button>
          <button
            className="bg-gray rounded-md px-2 py-2 flex items-center"
            style={{
              boxShadow: `inset 0px 4px 30px 0px #FFFFFF, 0px 2px 6px -1px #00000040`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0882 13V13C20.2486 13 22 14.7514 22 16.9118V17C22 19.2091 20.2091 21 18 21H7C4.79086 21 3 19.2091 3 17V17C3 14.7909 4.79086 13 7 13H8.02941"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.9492 18C11.9492 18.4142 12.285 18.75 12.6992 18.75C13.1134 18.75 13.4492 18.4142 13.4492 18H11.9492ZM13.2295 3.46967C12.9367 3.17678 12.4618 3.17678 12.1689 3.46967L7.39592 8.24264C7.10302 8.53553 7.10302 9.01041 7.39592 9.3033C7.68881 9.59619 8.16368 9.59619 8.45658 9.3033L12.6992 5.06066L16.9419 9.3033C17.2348 9.59619 17.7096 9.59619 18.0025 9.3033C18.2954 9.01041 18.2954 8.53553 18.0025 8.24264L13.2295 3.46967ZM13.4492 18V4H11.9492V18H13.4492Z"
                fill="black"
              />
            </svg>
            <span className="ms-2 ms:text-xs md:text-[16px] font-normal">
              Export
            </span>
          </button>
          <button
            className="bg-gray rounded-md px-2 py-2 flex items-center"
            style={{
              boxShadow: `inset 0px 4px 30px 0px #FFFFFF, 0px 2px 6px -1px #00000040`,
            }}
          >
            <svg
              width="28"
              height="6"
              viewBox="0 0 28 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.08333 2.99992C6.08333 4.61075 4.7775 5.91658 3.16667 5.91658C1.55584 5.91658 0.25 4.61075 0.25 2.99992C0.25 1.38909 1.55584 0.083252 3.16667 0.083252C4.7775 0.083252 6.08333 1.38909 6.08333 2.99992Z"
                fill="#292556"
              />
              <path
                d="M16.9167 2.99992C16.9167 4.61075 15.6108 5.91658 14 5.91658C12.3892 5.91658 11.0833 4.61075 11.0833 2.99992C11.0833 1.38909 12.3892 0.083252 14 0.083252C15.6108 0.083252 16.9167 1.38909 16.9167 2.99992Z"
                fill="#292556"
              />
              <path
                d="M27.75 2.99992C27.75 4.61075 26.4442 5.91658 24.8333 5.91658C23.2225 5.91658 21.9167 4.61075 21.9167 2.99992C21.9167 1.38909 23.2225 0.083252 24.8333 0.083252C26.4442 0.083252 27.75 1.38909 27.75 2.99992Z"
                fill="#292556"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 ms:text-xs md:text-sm">
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Customer ID
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Customer Type
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Contact
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left font-medium text-gray-600">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 ms:text-xs md:text-sm"
              >
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerId}
                </td>
                <td
                  className="px-6 py-4 border-b border-gray-200 cursor-pointer"
                  onClick={() => openPopup(row)}
                >
                  {row.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.customerType}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-blue-600">
                  <a href={`mailto:${row.email}`}>{row.email}</a>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.contact}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  {row.address}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-1/3 p-6">
            <div className="flex bg-[#f5f5f5] pt-2 px-4 py-3 mt-[-24px] mx-[-24px] items-center rounded justify-between">
              <h2 className="text-xl font-bold">Customer Preview</h2>
              <button
                className="text-white rounded me-[-10px]"
                onClick={closePopup}
              >
                <img
                  src={Cross}
                  alt="cross"
                  className="rounded"
                  height={10}
                  width={45}
                />
              </button>
            </div>
            <div className="px-5 border border-gray-300 rounded-xl mt-8 mx-[-24px]">
              <div className="flex items-center justify-center gap-2 mt-4 mb-8">
                <img src={CustomerImage} alt="" />
                {selectedCustomer.name}
              </div>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Customer Id
                </strong>{" "}
                {selectedCustomer.customerId}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Name
                </strong>{" "}
                {selectedCustomer.name}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Customer Type
                </strong>{" "}
                {selectedCustomer.customerType}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Email
                </strong>{" "}
                <a href={`mailto:${selectedCustomer.email}`}>
                  {selectedCustomer.email}
                </a>
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Contact
                </strong>{" "}
                {selectedCustomer.contact}
              </p>
              <p className="flex justify-between text-sm mb-3">
                <strong className="font-normal text-gray-500 text-sm">
                  Address
                </strong>{" "}
                {selectedCustomer.address}
              </p>
            </div>
            <div className="flex justify-center  items-center">
              <button
                className="mt-4 text-custom-blue py-2 px-4 rounded underline"
                onClick={openOrderHistory}
              >
                View Customer Order History
              </button>
            </div>
          </div>
        </div>
      )}

      {isOrderHistoryOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-[1017px]">
            <div className="flex justify-between items-center py-6 px-6">
              <h2 className="text-xl font-semibold mb-4">
                Order History for {selectedCustomer.name}
              </h2>
              <div className="buttons flex gap-2 mt-[-20px]">
                <button className="bg-gray rounded-md shadow-lg px-4 py-2 flex items-center">
                  <FilterIcon />
                  <span className="ms-2 font-normal">Filter</span>
                </button>
                <button className="bg-gray rounded-md shadow-lg px-4 py-2 flex items-center">
                  <ExportIcon />
                  <span className="ms-2 font-normal">Export</span>
                </button>
                <button className="bg-gray rounded-md shadow-lg px-2 py-2 flex items-center">
                  <ThreeDots />
                </button>
                <button onClick={closeOrderHistory}>
                  <img src={Cross} alt="" />
                </button>
              </div>
            </div>
            <table className="min-w-full border-collapse border border-gray-200 mb-8">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-b">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="form-checkbox ms-[-10px]"
                    />
                  </th>
                  <th className="py-2 border-b ">Order ID</th>
                  <th className="py-2 border-b">Order</th>
                  <th className="py-2 border-b">Delivery Date</th>
                  <th className="py-2 border-b">Payment</th>
                  <th className="py-2 border-b">Delivery Fee</th>
                  <th className="py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => {
                  const isSelected = selectedOrders.includes(order.id);
                  return (
                    <tr
                      key={order.id}
                      className={`hover:bg-gray-50 ${
                        isSelected ? "bg-gray-100" : ""
                      }`} // Change background color when selected
                    >
                      <td className="px-4 py-2 border-b">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleOrderSelect(order.id)}
                          className="form-checkbox"
                        />
                      </td>
                      <td className="px-4 py-2 border-b">{order.id}</td>
                      <td className="px-4 py-2 border-b">{order.order}</td>
                      <td className="px-4 py-2 border-b">{order.date}</td>
                      <td className="px-4 py-2 border-b">{order.payment}</td>
                      <td className="px-4 py-2 border-b">{order.fee}</td>
                      <td className="px-4 py-2 border-b">
                        <span
                          className={`px-2 py-1 rounded text-sm  ${
                            order.status === "Delivered"
                              ? "bg-table-green text-txt-green"
                              : "bg-table-blue text-txt-blue"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Add Shipment Modal */}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Customer;
