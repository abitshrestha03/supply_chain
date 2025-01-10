import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
import Button from "../../components/Buttons/Button";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";
import UpwardCountryIcon from "../../assets/icons/UpwardCountryIcon";
import DownwardCountryIcon from "../../assets/icons/DownwardCountryIcon";
import Table from "../../components/Table/Table";
import AddShipmentModal from "./NewShipmentModal";
import { useEffect, useState } from "react";

const Shipment = () => {
  const [chartConfig, setChartConfig] = useState({
    data: {
      labels: [], // Empty labels array
      datasets: [], // Empty datasets array
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        x: { ticks: { font: { size: 12 } } },
        y: { ticks: { stepSize: 10 } },
      },
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    { label: "Order Id", accessor: "orderId" },
    { label: "Shipping ID", accessor: "shippingId" },
    { label: "Dispatched Date", accessor: "deliveryTime" },
    { label: "Shipping Method", accessor: "shippingMethod" },
    { label: "Fee", accessor: "fee" },
    { label: "Status", accessor: "status" },
    { label: "Action", accessor: "action" },
  ];

  const shipmentData = [
    {
      orderId: "ABC2429Z",
      shippingId: "LT-112039",
      deliveryTime: "22/09/2024",
      shippingMethod: "Air",
      fee: "$1000",
      status: "Delivered",
    },
    {
      orderId: "ALX0007P",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Road",
      fee: "$1290",
      status: "Pending",
    },
    {
      orderId: "ACW1239L",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Air",
      fee: "$2500",
      status: "Shipping",
    },
    {
      orderId: "TRX1129P",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Road",
      fee: "$3200",
      status: "Pending",
    },
    {
      orderId: "LLP9920Z",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Air",
      fee: "$1990",
      status: "Delivered",
    },
    {
      orderId: "TCA1192R",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Air",
      fee: "$2725",
      status: "Shipping",
    },
    {
      orderId: "ACW1239L",
      shippingId: "LT-112903",
      deliveryTime: "22/09/2024",
      shippingMethod: "Road",
      fee: "$8920",
      status: "Delivered",
    },
  ].map((shipment) => ({
    ...shipment,
    action: (
      <span className="underline text-custom-blue text-lg">Track Shipment</span>
    ),
  }));

  // Define configurations for md and sm screens
  const mdConfig = {
    data: {
      labels: Array.from({ length: 30 }, (_, i) => i + 1),
      datasets: [
        {
          label: "Success Rate",
          data: [
            5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 63, 66, 69, 72, 75,
            78, 81, 84, 87, 90, 93, 95, 96, 97, 98, 99, 100, 100,
          ],
          backgroundColor: "#5EC320",
          borderColor: "#5EC320",
          fill: false,
          borderWidth: 3,
        },
        {
          label: "Efficiency",
          data: [
            8, 12, 18, 24, 30, 36, 42, 48, 54, 58, 62, 66, 69, 71, 73, 75, 77,
            79, 81, 83, 85, 87, 89, 91, 92, 93, 94, 95, 96, 97,
          ],
          borderColor: "#26a5ff",
          backgroundColor: "#26a5ff",
          fill: false,
          borderWidth: 3,
        },
        {
          label: "Delay Rate",
          data: [
            20, 19, 18, 18, 18, 17, 16, 15, 14, 14, 14, 13, 13, 13, 12, 12, 12,
            11, 11, 11, 10, 10, 10, 9, 9, 9, 9, 9, 8, 8,
          ],
          borderColor: "#FF0000",
          backgroundColor: "#FF0000",
          borderWidth: 3,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true, // Use point style for rounded shapes
            boxWidth: 10, // Width of the legend point
            boxHeight: 10, // Height of the legend point
            pointStyle: "rectRounded",
            padding: 10, // Space between the text and the box
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 10,
              color: "#969696",
              fontStyle: "normal",
              family: "Montserrat",
            },
            callback: function (value) {
              const sequence = [1, 3, 5, 7, 10, 13, 15, 17, 20, 23, 25, 27, 30]; // Define the custom sequence
              return sequence.includes(value) ? value : ""; // Display only the values from the sequence
            },
          },
          grid: {
            display: false, // Hide grid lines on x-axis
          },
        },
        y: {
          display: true,
          grid: {
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            display: true,
            beginAtZero: true,
            stepSize: 20,
            font: {
              size: 10,
              color: "#969696",
              fontStyle: "normal",
              family: "Montserrat",
            }, // Add fontStyle: 'normal'

            min: 0,
            max: 100,
            callback: function (value) {
              return value + "%";
            },
          },
          drawBorder: false,
        },
      },
      elements: {
        point: {
          radius: 0, // Remove dots on the line
          hoverRadius: 0, // No hover effect for dots
        },
      },
    },
  };

  const smConfig = {
    data: {
      labels: Array.from({ length: 15 }, (_, i) => i + 1),
      datasets: [
        {
          label: "Success Rate",
          data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 63, 66, 69],
          borderColor: "#8bd35e",
          fill: false,
          borderWidth: 1,
        },
        {
          label: "Efficiency",
          data: [8, 12, 18, 24, 30, 36, 42, 48, 54, 58, 62, 66, 69, 71, 73],
          borderColor: "#26a5ff",
          fill: false,
          borderWidth: 1,
        },
        {
          label: "Delay Rate",
          data: [20, 19, 18, 18, 18, 17, 16, 15, 14, 14, 14, 13, 13, 13, 12],
          borderColor: "#ff0000",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
            // boxWidth: 10,
            font: {
              size: 9,
              weight: "normal",
              color: "#969696",
            },
            generateLabels: (chart) => {
              const datasets = chart.data.datasets;
              return datasets.map((dataset, i) => ({
                text: dataset.label,
                fillStyle: dataset.borderColor, // Match legend box color with line color
                strokeStyle: dataset.borderColor,
                hidden: !chart.isDatasetVisible(i),
                lineCap: dataset.borderCapStyle,
                lineDash: dataset.borderDash,
                lineDashOffset: dataset.borderDashOffset,
                lineJoin: dataset.borderJoinStyle,
                pointStyle: "rect", // Sets point style to rectangle
              }));
            },
          },
        },
      },
      layout: {},
      scales: {
        y: {
          display: true,
          grid: {
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            display: true,
            beginAtZero: true,
            stepSize: 20,
            font: {
              size: 10,
              weight: 400,
            },
            min: 0,
            max: 100,
            callback: function (value) {
              return value + "%";
            },
          },
          drawBorder: false,
        },
        x: {
          display: true,
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            display: true,
            beginAtZero: true,
            font: {
              size: 10,
              weight: 400,
            },
            min: 0,
            max: 15, // Limit for smaller screen
            stepSize: 1,
            callback: function (value) {
              const validTicks = [1, 3, 5, 7, 10, 13, 15];
              return validTicks.includes(value) ? value : "";
            },
          },
          drawBorder: false,
        },
      },
      elements: {
        point: {
          radius: 0,
          hoverRadius: 0,
        },
      },
    },
  };

  const topProducts = [
    { product: "SkinCare Products", sales: "1200.00", trend: "up" },
    { product: "Coca Cola", sales: "24.32k", trend: "up" },
    { product: "Band-Aid", sales: "12.09k", trend: "down" },
    { product: "Wai Wai Noodles", sales: "12.09k", trend: "down" },
    { product: "Packaged Beans", sales: "12.09k", trend: "up" },
    { product: "Drinks", sales: "12.09k", trend: "down" },
  ];

  // Update chart configuration based on screen size
  useEffect(() => {
    const updateChartConfig = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setChartConfig(mdConfig);
      } else {
        setChartConfig(smConfig);
      }
    };

    updateChartConfig(); // Initial load
    window.addEventListener("resize", updateChartConfig);

    return () => {
      window.removeEventListener("resize", updateChartConfig);
    };
  }, []);

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full h-screen flex flex-col ms:px-4 md:ps-2 md:pe-6 md:py-4  md:mt-16">
      <div className="flex ms:justify-end md:justify-between mb-6">
        <DashboardTabs />
      </div>
      <div className="flex ms:flex-col md:flex-row md:space-x-6">
        <div className="md:w-2/3 bg-white shadow-md rounded-lg">
          <div className="flex items-center justify-between mb-4 bg-[#f5f5f5] ms:px-2 md:px-4 py-4">
            <h2 className="ms:text-[16px] md:text-xl font-medium">
              Shipment Performance
            </h2>
            <div className="flex gap-2">
              <Button
                textColor="grey"
                bgColor="white"
                text="Monthly"
                size="12px"
                weight="600"
                icon={<DownArrowIcon />}
              />
              <button
                style={{ backgroundColor: "white" }}
                className="shadow-lg px-2 rounded-md"
              >
                <ThreeDots />
              </button>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center mb-4">
              <h3 className="ms:text-lg md:text-3xl font-normal">93.2%</h3>
            </div>
            <div className="flex ms:w-[40vw] md:w-[11.3vw] items-center justify-between mb-4 mt-[-15px]">
              <p className="text-gray-500 ms:text-[8px] md:text-xs">
                vs Last month
              </p>
              <p
                className={`ms:text-[8px] md:text-[10px] ${"bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2"}`}
              >
                {`+${+12.3}%`}
                {<UpwardArrowIcon />}
              </p>
            </div>
            <div className="md:h-[300px]">
              <Line data={chartConfig.data} options={chartConfig.options} />
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white shadow-md rounded-lg p-3 ms:mt-4 md:mt-0">
          <h2 className="ms:text-base md:text-xl font-medium mb-1">
            Top Countries by Sales
          </h2>
          <div className="flex flex-col">
            <div className="mb-4">
              <hr className="border-t border-gray-300" />
            </div>
          </div>
          <div className="px-2">
            <div className="ms:text-2xl md:text-3xl mb-4 flex justify-between items-center">
              34.89k
              <p className="text-gray-500 text-xs mt-4">Since Last Week</p>
            </div>
            <ul>
              {topProducts.map((product, index) => (
                <table
                  key={index}
                  className="flex justify-between items-center py-2 my-4 last:border-none"
                >
                  <span className="flex items-center ms:text-xs md:text-sm">
                    <img
                      src={`https://flagcdn.com/w20/${product.product
                        .toLowerCase()
                        .slice(0, 2)}.png`}
                      alt={product.product}
                      className="mr-2 rounded-full w-6 h-6"
                    />
                    {product.product}
                  </span>
                  <span
                    className={`ml-2 ${
                      product.trend === "up" ? (
                        <UpwardCountryIcon />
                      ) : (
                        <DownwardCountryIcon />
                      )
                    }`}
                  >
                    {product.trend === "up" ? (
                      <UpwardCountryIcon />
                    ) : (
                      <DownwardCountryIcon />
                    )}
                  </span>
                  <span className="flex items-center ms:text-xs md:text-sm">
                    {product.sales}
                    <span
                      className={`ml-2 ${
                        product.trend === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    ></span>
                  </span>
                </table>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[50px]">
        <Table
          columns={columns}
          data={shipmentData}
          title="Shipment Tracking"
        />
      </div>{" "}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Shipment;
