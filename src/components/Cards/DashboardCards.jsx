import DownwardFallingIcon from "../../assets/icons/DownwardFallingIcon";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value, subtitle, trend, icon: Icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg ms:px-2 md:px-6 pt-5 md:pb-2 w-full flex items-center justify-between">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="ms:text-[9px] md:text-lg font-medium">{title}</h2>
          {Icon && (  
            <div className="text-[#6187ff] bg-white shadow p-1 rounded-md md:mt-[-10px] md:me-[-10px]">
              <Icon className="md:w-6 md:h-6" />
            </div>
          )}
        </div>
        <p className="ms:text-lg md:text-3xl font-semibold mb-2 text-black">{value}</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-gray-500 ms:text-[8px] md:text-xs">{subtitle}</p>
          <p
            className={`text-[10px] ${
              trend > 0
                ? "bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2 ms:ms:text-[10px] md:text-sm"
                : "bg-[#ffcccc] rounded-xl px-2 text-[#ff3c3c] font-medium flex items-center gap-2 ms:text-[10px] md:text-sm"
            }`}
            >
            {trend > 0 ? `+${trend}%` : `${trend}%`}
            {trend > 0 ? <UpwardArrowIcon/>:  <DownwardFallingIcon/>  }
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
