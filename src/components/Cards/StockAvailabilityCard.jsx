import ProgressBar from "../Charts/ProgressBar";
import ThreeDots from "../../assets/icons/ThreeDots";

const StockAvailabilityCard = () => {
  const data = [
    {
      label: "In Stock",
      units: 1800,
      percentage: 75,
      color: "#00C8FF",
      items: [],
    },
    {
      label: "Low Stock",
      units: 1000,
      percentage: 50,
      color: "linear-gradient(270deg, #0101FF 0.03%, #0000C7 154.09%)",
      items: [
        { name: "Canned Foods", quantity: 22, supplier: "Apple, Inc" },
        { name: "Toilet Papers", quantity: 12, supplier: "Dell, Inc" },
        { name: "Wai Wai Instant Noodles", quantity: 19, supplier: "Hp, Inc" },
      ],
    },
    {
      label: "Out of Stock",
      units: 200,
      percentage: 10,
      color: "#31356E",
      items: [],
    },
  ];

  return (
    <div className="bg-white pb-4">
      <div className="flex bg-[#f0f0f0] px-4 py-4 justify-between items-center">
        <h2 className="text-black ms:text-sm md:text-lg font-medium">
          Stock Availability
        </h2>
        <div>
          <button
            style={{ backgroundColor: "#f7f7f7" }}
            className="shadow-lg ms:px-2 md:px-2 rounded-md"
          >
            <ThreeDots />
          </button>
        </div>
      </div>{" "}
      <div className="px-4 pt-2">
        <p className="ms:text-lg md:text-2xl font-semibold mb-0 text-black">
          2400 Units
        </p>
        <div className="flex ms:w-[40vw] md:w-[11.3vw] items-center justify-between">
          <p className="text-txt-gray ms:text-[8px] md:text-xs">Total Stock</p>
        </div>
      </div>
      <div className="px-5">
        {data.map((item) => (
          <ProgressBar
            key={item.label}
            label={item.label}
            units={item.units}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
        {data.map((entry, index) => (
          <div key={index} className="mb-4">
            {/* Render Low Stock Items */}
            {entry.items.length > 0 && (
              <div className="mt-1">
                <h3 className="text-sm font-medium mb-2 text-txt-gray text-xs">Low Stock Items</h3>
                <ul className="text-sm">
                  {entry.items.map((item, itemIndex) => (
                    <table key={itemIndex} className="text-xs mb-2">
                      <tbody>
                        <tr>
                          <td className="flex items-center space-x-2 w-64">
                            <div
                              className="w-2 h-4"
                              style={{
                                background: `linear-gradient(to right, #003DFF 50%,#0101FF33 50%)`,
                              }}
                            ></div>
                            <span>{item.name}</span>
                          </td>
                          <td className="w-16">
                            <span>{item.quantity}</span>
                          </td>
                          <td>
                            <span>{item.supplier}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockAvailabilityCard;
