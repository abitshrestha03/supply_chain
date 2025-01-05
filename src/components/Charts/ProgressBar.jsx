import PropTypes from "prop-types";

const ProgressBar = ({ label, units, percentage, color }) => {
  // If the color is a gradient (contains "linear-gradient"), apply it to the background
  const style = {
    width: `${percentage}%`,
    background: color.includes('linear-gradient') ? color : color, // Apply gradient if present
  };

  return (
    <div className="mb-4 -mt-[1.5vh]">
      <div className="flex justify-between items-center">
        <p className="text-xs text-black font-medium">{label}</p>
        <p className="text-xs text-gray-500">{units} Units</p>
      </div>
      <div className="w-full bg-gray-200 rounded-sm h-4 -mt-[1.9vh]">
        <div
          className={`h-4 rounded-sm`}
          style={style} // Apply the calculated style
        ></div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
