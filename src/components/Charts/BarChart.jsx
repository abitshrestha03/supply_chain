import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import Button from "../Buttons/Button";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import ThreeDots from "../../assets/icons/ThreeDots";
import UpwardArrowIcon from "../../assets/icons/UpwardArrowIcon";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const BarChart = () => {
  // const data = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   datasets: [
  //     {
  //       label: "Sales ($)",
  //       data: [1000, 700, 500, 800, 900, 690, 900, 300, 750, 600, 880, 950],
  //       backgroundColor: "#eaeaea",
  //       borderRadius: 5,
  //       hoverBackgroundColor: "#003DFF",
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: { display: false },
  //   },
  //   layout: {
  //     padding: {
  //       left: -3, // Padding for the left side of the chart area
  //       right: 10, // Padding for the right side of the chart area
  //       top: 20, // Padding above the chart content
  //       bottom: 10, // Padding below the chart content
  //     },
  //   },
  //   scales: {
  //     x: {
  //       display: true,
  //       grid: {
  //         display: false,
  //       },
  //       border: {
  //         display: false,
  //       },
  //       ticks: {
  //         display: true,
  //         font: {
  //           size: 10,
  //           weight: 400,
  //         },
  //       },
  //     },
  //     y: {
  //       display: true,
  //       grid: {
  //         display: false,
  //       },
  //       border: {
  //         display: false,
  //       },
  //       ticks: {
  //         display: true,
  //         font: {
  //           size: 10,
  //           weight: 400,
  //         },
  //         beginAtZero: true,
  //         stepSize: 200,
  //         min: 0,
  //         max: 1200,
  //         callback: function (value) {
  //           return "$" + value;
  //         },
  //       },
  //       drawBorder: false,
  //     },
  //   },
  // };

  const initialData = {
    labels: ["Loading..."], // Placeholder labels
    datasets: [
      {
        label: "Sales ($)",
        data: [0], // Placeholder data
        backgroundColor: "#eaeaea",
      },
    ],
  };

  const initialOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        display: true,
        grid: { display: false },
      },
      y: {
        display: true,
        grid: { display: false },
      },
    },
  };

  const [chartConfig, setChartConfig] = useState({
    data: initialData,
    options: initialOptions,
  });

  useEffect(() => {
    const updateChartConfig = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        // MD style
        setChartConfig({
          data: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Sales ($)",
                data: [1000, 700, 500, 800, 900, 690, 900, 300, 750, 600, 880, 950],
                backgroundColor: "#eaeaea",
                borderRadius: 5,
                hoverBackgroundColor: "#003DFF",
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            layout: {
              padding: { top: 20, right: 10, bottom: 10, left: -3 },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { size: 12 } },
              },
              y: {
                grid: { display: false },
                ticks: {
                  font: { size: 12 },
                  stepSize: 200,
                  callback: (value) => "$" + value,
                },
              },
            },
          },
        });
      } else {
        // SM style
        setChartConfig({
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Sales ($)",
                data: [800, 600, 400, 700, 500, 300, 400],
                backgroundColor: "#eaeaea",
                borderRadius: 3,
                hoverBackgroundColor: "#003DFF",
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
            },
            layout: {
              padding: { top: 10, right: 5, bottom: 5, left: -2 },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { size: 8 } },
              },
              y: {
                grid: { display: false },
                ticks: {
                  font: { size: 8 },
                  stepSize: 100,
                  callback: (value) => "$" + value,
                },
              },
            },
          },
        });
      }
    };

    // Initialize and attach listener
    updateChartConfig();
    window.addEventListener("resize", updateChartConfig);

    return () => {
      window.removeEventListener("resize", updateChartConfig);
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex bg-[#f0f0f0] px-4 py-4 justify-between items-center">
        <h2 className="text-black ms:text-sm md:text-lg font-medium">Total Sales</h2>
        <div className="flex gap-2">
          <Button
            textColor="grey"
            bgColor="#f7f7f7"
            text="Monthly"
            size="12px"
            weight="600"
            icon={<DownArrowIcon />}
          />
          <button style={{ backgroundColor:"#f7f7f7" }} className="shadow-lg ms:px-2 md:px-2 rounded-md">
            <ThreeDots />
          </button>
        </div>
      </div>
      <div className="px-4 py-6">
        <p className="ms:text-lg md:text-4xl font-semibold mb-2">$8290.00</p>
        <div className="flex ms:w-[40vw] md:w-[11.3vw] items-center justify-between mb-4">
          <p className="text-gray-500 ms:text-[8px] md:text-xs">vs Last year</p>
          <p
            className={`ms:text-[8px] md:text-[10px] ${"bg-[#dff3d2] rounded-xl px-2 text-[#87d259] font-medium flex items-center gap-2"}`}
          >
            {`+${+9.3}%`}
            {<UpwardArrowIcon />}
          </p>
        </div>
        <div className="h-[190px]">
          {/* <Bar data={data} options={options} /> */}
          <Bar data={chartConfig.data} options={chartConfig.options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
