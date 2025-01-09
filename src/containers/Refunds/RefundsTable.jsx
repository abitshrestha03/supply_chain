import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import SearchBox from "../../components/Buttons/SearchBox";
import { SlArrowDown } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const RefundsTable = ({ columns, data, showRightArrow }) => {
  const navigate=useNavigate();
  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between bg-white ms:p-2 md:p-4">
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
      <table className="min-w-full table-auto border-collapse">
        {/* Table Header */}
        <thead className="bg-[#F1F1F1]">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-gray-600 border-b border-gray-200"
              >
                {col}
              </th>
            ))}
            {showRightArrow && (
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
              </th>
            )}{" "}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 bg-white">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-6 text-sm text-gray-700 border-b border-gray-200"
                >
                  {/* Render the content dynamically */}
                  {col === "Action" ? (
                    <div className="flex items-center gap-2">
                      <div className="border-2 border-[#41AC00] rounded-md">
                        <button className="bg-green-100 text-green-600 px-2 py-2 rounded hover:bg-green-200 flex items-center justify-center">
                          <IoCheckmark className="text-xl" />
                        </button>
                      </div>

                      <div className="border-2 border-[#FF0000] rounded-md">
                        <button className="bg-[#FF000033] text-red-600 px-2 py-2 rounded hover:bg-red-200 flex items-center justify-center">
                          <RxCross1 className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ) : col === "Status" ? (
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        row[col] === "Approved"
                          ? "bg-[#5EC32033] text-[#5EC320]"
                          : row[col] === "Rejected"
                          ? "bg-[#FF000033] text-[#FF0000]"
                          : "bg-[#F9B43633] text-[#F9B436]"
                      }`}
                    >
                      {row[col]}
                    </span>
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
              {showRightArrow && (
                <td className="px-4 py-6 border-b border-gray-200">
                  <IoIosArrowDropright className="text-2xl text-gray-400 cursor-pointer" onClick={()=>{navigate('/return-refunds/refund-request')}}/>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RefundsTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  showRightArrow: PropTypes.bool.isRequired,
};

export default RefundsTable;
