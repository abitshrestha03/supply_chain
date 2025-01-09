import { useState } from "react";
import PropTypes from "prop-types";

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col border-b-2 border-[#0000001A] ">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 pb-1 relative ${
              activeTab === tab
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

TabNavigation.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabNavigation;

