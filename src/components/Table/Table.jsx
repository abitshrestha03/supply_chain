import { useState } from "react";
import ExportIcon from "../../assets/icons/ExportIcon";
import FilterIcon from "../../assets/icons/FilterIcon";
import ThreeDots from "../../assets/icons/ThreeDots";

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
        <div className="pre-headings flex justify-between px-6 py-2">
          <h2 className="font-medium mt-2 ms:text-[12px] md:text-xl">{title}</h2>
          <div className="buttons flex gap-2">
            <button className="bg-gray rounded-md shadow-lg ms:px-2 md:px-4 md:py-2 flex items-center">
              <FilterIcon />
              <span className="ms:text-xs md:text-lg ml-1 font-normal">
                Filter
              </span>
            </button>
            <button className="bg-gray rounded-md shadow-lg ms:px-2 ms:py-2 md:px-4 md:py-2 flex items-center">
              <ExportIcon />
              <span className="ms:text-xs md:text-lg ml-1 font-normal">
                Export
              </span>
            </button>
            <button className="bg-gray rounded-md shadow-lg md:px-2 md:py-2 flex items-center">
              <ThreeDots />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 ms:text-xs lg:text-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 leading-normal">
              <th className="py-3 px-6 text-left">
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
          <tbody className="text-gray-600 font-semibold">
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-gray-100 ${
                  selectedRows.has(index) ? "bg-gray-200" : ""
                }`}
              >
                <td className="py-3 px-6 text-left">
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
