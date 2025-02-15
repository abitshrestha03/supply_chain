import { useState } from "react";
import ExportIcon from "../../assets/icons/ExportIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import SearchBox from "../Buttons/SearchBox";
import { SlArrowDown } from "react-icons/sl";

/* eslint-disable react/prop-types */
const Table = ({ columns, data, title }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [tableData, setTableData] = useState(data);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const allRowIds = new Set(tableData.map((_, index) => index));
      setSelectedRows(allRowIds);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleRowCheckboxChange = (index) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const isAllRowsSelected = selectedRows.size === tableData.length;

  const handleStatusClick = (index) => {
    const newData = [...tableData];
    const currentStatus = newData[index].status;

    if (currentStatus === "Delivered") {
      newData[index].status = "Pending";
    } else if (currentStatus === "Pending") {
      newData[index].status = "Shipping";
    } else if (currentStatus === "Shipping") {
      newData[index].status = "Delivered";
    }

    setTableData(newData);
  };

  return (
    <div className="relative mt-4">
      {/* Sticky Header for Filter and Export */}
      <div className="sticky top-0 bg-white z-10">
        <div className="pre-headings flex justify-between px-6 py-3">
          <SearchBox placeholder="Search Salesperson . . ." />
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
              className="bg-gray rounded-md ms:px-2 md:px-2 flex items-center"
              style={{
                boxShadow: `0px 2px 6px -1px #00000040, 0px 4px 30px 0px #FFFFFF inset`,
              }}
            >
              <FilterIcon />
              <span className="ms:text-xs md:text-[16px] ml-1 font-normal">
                Filter
              </span>
            </button>
            <button
              className="bg-gray rounded-md  ms:px-2 ms:py-2 md:px-2 flex items-center"
              style={{
                boxShadow: `0px 2px 6px -1px #00000040, 0px 4px 30px 0px #FFFFFF inset`,
              }}
            >
              <ExportIcon />
              <span className="ms:text-xs md:text-[16px] ml-1 font-normal">
                Export
              </span>
            </button>
            <button
              className="bg-gray rounded-md md:px-2 flex py-0 items-center"
              style={{
                boxShadow: `0px 2px 6px -1px #00000040, 0px 4px 30px 0px #FFFFFF inset`,
              }}
            >
              <ThreeDots />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 ms:text-xs lg:text-lg">
          <thead>
            <tr className="bg-[#E6E6E6] text-[#616161] text-sm font-light leading-normal">
              <th className="py-3 pl-6 pr-0 text-left">
                <input
                  type="checkbox"
                  checked={isAllRowsSelected}
                  onChange={handleCheckboxChange}
                />
              </th>
              {columns.map((column, index) => (
                <th key={index} className="py-3 px-6 text-left">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  selectedRows.has(index) ? "bg-gray-200" : ""
                }`}
              >
                <td className="py-3 pl-6 pr-0 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(index)}
                    onChange={() => handleRowCheckboxChange(index)}
                  />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-3 px-6 text-left">
                    {column.accessor === "status" ? (
                      <span
                        className={`py-1 px-6 rounded-sm text-xs cursor-pointer ${
                          item[column.accessor] === "Delivered"
                            ? "bg-table-green text-txt-green"
                            : item[column.accessor] === "Pending"
                            ? "bg-table-yellow text-txt-yellow"
                            : item[column.accessor] === "Shipping"
                            ? "bg-table-blue text-txt-blue"
                            : "bg-gray-100 text-gray-600"
                        }`}
                        onClick={() => handleStatusClick(index)}
                      >
                        {item[column.accessor]}
                      </span>
                    ) : (
                      item[column.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
