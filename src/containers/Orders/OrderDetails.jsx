import { FiEdit3 } from "react-icons/fi";
import Order1 from "../../assets/images/order1.png";
import Order2 from "../../assets/images/order2.png";
import Order3 from "../../assets/images/order3.png";
import orderProfileImage from "../../assets/images/orderProfileimage.png";
import OrderHistoryIcon from "../../assets/icons/OrderHistoryIcon";
import { CiMail } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi2";

const OrderDetails = () => {
  const items = [
    {
      description: "Sunscreen",
      category: "Skincare Products",
      price: "Rs 4.00",
      quantity: "12",
      discount: "-",
      total: "Rs 48.00",
      additionalInfo: { SKU: "LC-1102847", Size: "12 oz" },
      image: Order1,
    },
    {
      description: "Wai Wai Noodles",
      category: "Food & Beverages",
      price: "Rs 35.00",
      quantity: "15",
      discount: "5%",
      total: "Rs 498.75",
      additionalInfo: { FKU: "LC-1102847", Flavor: "Variety" },
      image: Order2,
    },
    {
      description: "Packaged Beans",
      category: "Food & Beverages",
      price: "Rs 25.00",
      quantity: "15",
      discount: "-",
      total: "Rs 375.00",
      additionalInfo: { FKU: "LC-1102847", Variety: "Variety" },
      image: Order3,
    },
  ];
  return (
    <div className="bg-body-color grid grid-cols-3 gap-6 p-6 mt-16">
      {/* Left Column */}
      <div className="col-span-2 grid gap-6">
        {/* Row 1: Order Items */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between w-[15vw] items-center mb-4">
            <h2 className="text-lg font-semibold mt-4">Order Items</h2>
            <span className="text-red-500 bg-red-100 rounded-md px-3 py-1 text-sm">
              Unfulfilled
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="text-left border-b border-gray-300 text-gray-500">
                  <th className="py-3 px-2 font-medium w-2/5">
                    Product Description
                  </th>
                  <th className="py-3 px-2 font-medium w-1/5 text-center">
                    Price
                  </th>
                  <th className="py-3 px-2 font-medium w-1/5 text-center">
                    Quantity
                  </th>
                  <th className="py-3 px-2 font-medium w-1/5 text-center">
                    Discount
                  </th>
                  <th className="py-3 px-2 font-medium w-1/5 text-center">
                    Total
                  </th>
                  <th className="py-3 px-2 font-medium w-auto"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-150"
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center">
                        <div className="rounded-lg border border-gray-200 w-16 h-16 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.description}
                            className="w-16 h-16 object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-xs text-gray-500 mb-0">
                            {item.category}
                          </p>
                          <p className="font-semibold mb-0 text-[14px]">
                            {item.description}
                          </p>
                          {Object.entries(item.additionalInfo).map(
                            ([key, value]) => (
                              <p
                                key={key}
                                className="text-xs text-gray-400 mb-0 flex gap-x-2"
                              >
                                <span>{key}:</span>
                                {value}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center">{item.price}</td>
                    <td className="py-4 px-2 text-center">x {item.quantity}</td>
                    <td className="py-4 px-2 text-center text-green-600">
                      {item.discount || "-"}
                    </td>
                    <td className="py-4 px-2 text-center font-medium whitespace-nowrap">
                      <span>{item.total}</span>
                    </td>
                    <td className="py-4 px-2 w-full text-center">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FiEdit3 />
                      </button>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Row 2: Payment Receipt */}
        <div className="bg-white shadow-lg rounded-md p-6">
          <div className="flex justify-between items-center mb-4 w-[22vw]">
            <h2 className="text-lg font-bold mt-4">Payment Receipt</h2>
            <span className="text-sm bg-[#F9B43633] text-[#F9B436] px-2 py-1 rounded">
              Payment Pending
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Sub-total</span>
              <span className="font-medium">Rs 13,200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span className="font-medium">Rs 35.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500 font-medium">5%</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="text-red-500 font-medium">12%</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>Rs 13,000.00</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center bg-gray-100 rounded p-2">
              <span>Paid by the customer</span>
              <span className="flex gap-2 items-center">
                Rs 0.00 <FiEdit3 />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Header */}
        <h2 className="text-lg font-semibold mb-6">Customer Information</h2>

        {/* Customer Profile */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
          <div className="flex items-center">
            <img
              src={orderProfileImage}
              alt="Customer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <p className="font-semibold">John Doe</p>
          </div>
          <button className="text-blue-600">
            <HiArrowRight />
          </button>
        </div>

        {/* Order History */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-6">
            <OrderHistoryIcon />
            <p className="font-semibold">Order History</p>
          </div>
          <button className="text-blue-600">
            <HiArrowRight />
          </button>
        </div>

        {/* Contact Information */}
        <div className="mb-6 flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Contact Information</h3>
          <p className="text-sm mb-1 flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 22C19.8978 22 20.2794 21.842 20.5607 21.5607C20.842 21.2794 21 20.8978 21 20.5V17C21 16.6022 20.842 16.2206 20.5607 15.9393C20.2794 15.658 19.8978 15.5 19.5 15.5C18.33 15.5 17.18 15.32 16.08 14.95C15.817 14.867 15.5363 14.8576 15.2683 14.9228C15.0004 14.988 14.7554 15.1254 14.56 15.32L13.12 16.76C10.6322 15.4024 8.58758 13.3578 7.23 10.87L8.66 9.44C9.07 9.05 9.22 8.47 9.04 7.91C8.68 6.82 8.5 5.67 8.5 4.5C8.5 4.10218 8.34196 3.72064 8.06066 3.43934C7.77936 3.15804 7.39782 3 7 3H3.5C3.10218 3 2.72064 3.15804 2.43934 3.43934C2.15804 3.72064 2 4.10218 2 4.5C2 14.15 9.85 22 19.5 22ZM3.5 4H7C7.13261 4 7.25979 4.05268 7.35355 4.14645C7.44732 4.24021 7.5 4.36739 7.5 4.5C7.5 5.78 7.7 7.03 8.09 8.22C8.14 8.36 8.13 8.56 7.97 8.72L6 10.68C7.65 13.91 10.07 16.33 13.31 18L15.26 16.03C15.4 15.89 15.59 15.85 15.77 15.9C16.97 16.3 18.22 16.5 19.5 16.5C19.6326 16.5 19.7598 16.5527 19.8536 16.6464C19.9473 16.7402 20 16.8674 20 17V20.5C20 20.6326 19.9473 20.7598 19.8536 20.8536C19.7598 20.9473 19.6326 21 19.5 21C10.4 21 3 13.6 3 4.5C3 4.36739 3.05268 4.24021 3.14645 4.14645C3.24021 4.05268 3.36739 4 3.5 4Z"
                fill="#003DFF"
              />
            </svg>
            <a href="tel:+977-9182736787">+977-9182736787</a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <CiMail className="text-custom-blue text-2xl" />
            <a href="mailto:johndoe23@gmail.com">johndoe23@gmail.com</a>
          </p>
        </div>

        {/* Shipping Address */}
        <div className="mb-6 gap-2 flex flex-col">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <div className="text-sm mb-1 flex items-center gap-4">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4375 19.937H2.56152C1.89848 19.937 1.2626 19.6736 0.793756 19.2048C0.324916 18.7359 0.0615234 18.1 0.0615234 17.437V16.61C0.0615234 12.641 3.62252 9.40999 7.99952 9.40999C12.3765 9.40999 15.9375 12.639 15.9375 16.61V17.437C15.9375 18.1 15.6741 18.7359 15.2053 19.2048C14.7364 19.6736 14.1006 19.937 13.4375 19.937ZM7.99952 10.412C4.17352 10.412 1.06152 13.192 1.06152 16.612V17.439C1.06152 17.8368 1.21956 18.2183 1.50086 18.4997C1.78217 18.781 2.1637 18.939 2.56152 18.939H13.4375C13.8353 18.939 14.2169 18.781 14.4982 18.4997C14.7795 18.2183 14.9375 17.8368 14.9375 17.439V16.61C14.9375 13.192 11.8255 10.412 7.99952 10.412ZM7.99952 7.91099C7.22339 7.91119 6.46462 7.68122 5.81919 7.25016C5.17376 6.81911 4.67066 6.20633 4.37351 5.48933C4.07636 4.77233 3.99851 3.98332 4.1498 3.22207C4.3011 2.46082 4.67474 1.76154 5.22348 1.21266C5.77222 0.663775 6.47141 0.289951 7.23262 0.138462C7.99383 -0.0130277 8.78287 0.0646222 9.49994 0.361591C10.217 0.65856 10.8299 1.16151 11.2611 1.80683C11.6924 2.45215 11.9225 3.21085 11.9225 3.98699C11.9217 5.02728 11.5082 6.02475 10.7727 6.76045C10.0372 7.49614 9.03982 7.90993 7.99952 7.91099ZM7.99952 1.06399C7.42113 1.06379 6.85566 1.23514 6.37466 1.55636C5.89366 1.87757 5.51873 2.33423 5.29729 2.86856C5.07586 3.40289 5.01787 3.9909 5.13066 4.55819C5.24345 5.12548 5.52196 5.64658 5.93094 6.05557C6.33993 6.46456 6.86103 6.74306 7.42833 6.85585C7.99562 6.96865 8.58362 6.91066 9.11795 6.68922C9.65228 6.46779 10.1089 6.09286 10.4302 5.61185C10.7514 5.13085 10.9227 4.56539 10.9225 3.98699C10.9217 3.21201 10.6135 2.46899 10.0655 1.92099C9.51752 1.373 8.77451 1.06478 7.99952 1.06399Z"
                fill="#003DFF"
              />
            </svg>
            John Doe
          </div>
          <p className="text-sm mb-1 flex items-center gap-4">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42253 1.5V0.5H16.5765V1.5H1.42253ZM1.49953 15.5V9.5H0.269531V8.5L1.42253 3.5H16.5765L17.7305 8.5V9.5H16.4995V15.5H15.4995V9.5H10.4995V15.5H1.49953ZM2.49953 14.5H9.49953V9.5H2.49953V14.5ZM1.27953 8.5H16.7195L15.7915 4.5H2.20753L1.27953 8.5Z"
                fill="#003DFF"
              />
            </svg>
            JohnDoes Retail Store
          </p>
          <p className="text-sm mb-1 flex items-center gap-4 -ml-[3px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9998 20.3999L11.6158 19.9679C11.3758 19.7279 5.75977 13.1039 5.75977 9.11988C5.75977 5.66388 8.54377 2.87988 11.9998 2.87988C15.4558 2.87988 18.2398 5.66388 18.2398 9.11988C18.2398 13.1039 12.6238 19.7279 12.3838 20.0159L11.9998 20.3999ZM11.9998 3.83988C9.07177 3.83988 6.71977 6.19188 6.71977 9.11988C6.71977 12.1919 10.7518 17.3759 11.9998 18.9119C13.2478 17.3759 17.2798 12.1919 17.2798 9.11988C17.2798 6.19188 14.9278 3.83988 11.9998 3.83988Z"
                fill="#003DFF"
              />
              <path
                d="M11.9996 11.52C10.6556 11.52 9.59961 10.464 9.59961 9.11997C9.59961 7.77597 10.6556 6.71997 11.9996 6.71997C13.3436 6.71997 14.3996 7.77597 14.3996 9.11997C14.3996 10.464 13.3436 11.52 11.9996 11.52ZM11.9996 7.67997C11.1836 7.67997 10.5596 8.30397 10.5596 9.11997C10.5596 9.93597 11.1836 10.56 11.9996 10.56C12.8156 10.56 13.4396 9.93597 13.4396 9.11997C13.4396 8.30397 12.8156 7.67997 11.9996 7.67997Z"
                fill="#003DFF"
              />
            </svg>
            123 Main Street, Kathmandu, Nepal
          </p>
          <p className="text-sm">
            <a href="#" className="text-blue-600 underline">
              View Map
            </a>
          </p>
        </div>

        {/* Billing Address */}
        <div>
          <h3 className="font-semibold mb-2">Billing Address</h3>
          <p className="text-sm">Same as shipping address</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
