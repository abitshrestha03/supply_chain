import { useState } from "react";
import PropTypes from "prop-types";

const SearchBox = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <label className="relative block">
        <div>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05316 17.5961L7.33391 11.3151C7.83391 11.7279 8.40891 12.051 9.05891 12.2843C9.70891 12.5176 10.3813 12.6343 11.0762 12.6343C12.7853 12.6343 14.2318 12.0426 15.4157 10.8591C16.5995 9.67556 17.1914 8.22939 17.1914 6.52056C17.1914 4.81189 16.5997 3.36523 15.4162 2.18056C14.2327 0.996059 12.7865 0.403809 11.0777 0.403809C9.36899 0.403809 7.92232 0.995725 6.73766 2.17956C5.55316 3.36339 4.96091 4.80989 4.96091 6.51906C4.96091 7.23323 5.08074 7.91531 5.32041 8.56531C5.56024 9.21531 5.88016 9.78064 6.28016 10.2613L-0.000595093 16.5421L1.05316 17.5961ZM11.0762 11.1346C9.78766 11.1346 8.69632 10.6874 7.80216 9.79306C6.90782 8.89889 6.46066 7.80756 6.46066 6.51906C6.46066 5.23056 6.90782 4.13922 7.80216 3.24506C8.69632 2.35072 9.78766 1.90356 11.0762 1.90356C12.3647 1.90356 13.456 2.35072 14.3502 3.24506C15.2445 4.13922 15.6917 5.23056 15.6917 6.51906C15.6917 7.80756 15.2445 8.89889 14.3502 9.79306C13.456 10.6874 12.3647 11.1346 11.0762 11.1346Z"
                fill="black"
                fillOpacity="0.4"
              />
            </svg>
          </span>
          <input
            className="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pr-4 focus:outline-none"
            style={{
              paddingLeft: `40px`,
              boxShadow: `inset 0px 4px 30px 0px #FFFFFF, 0px 2px 6px -1px #00000040`,
            }}
            placeholder={placeholder || "Search..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
          />
        </div>
      </label>
    </form>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string, // Placeholder for the search box
  onSearch: PropTypes.func, // Callback function triggered on search
};

SearchBox.defaultProps = {
  placeholder: "Search...", // Default placeholder if none is provided
  onSearch: () => {}, // Default to a no-op function if no callback is provided
};

export default SearchBox;
