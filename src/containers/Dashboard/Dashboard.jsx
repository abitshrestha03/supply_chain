import { useState } from "react";
import Button from "../../components/Buttons/Button";
import DashboardCard from "../../components/Cards/DashboardCards";
import DashboardTabs from "../../components/Tabs/DashboardTab";
import ShippingIcon from "../../assets/icons/ShippingIcon";
import PackageIcon from "../../assets/icons/PackageIcon";
import PaymentIcon from "../../assets/icons/PaymentIcon";
import CheckCircle from "../../assets/icons/CheckCiricle";
import BarChartGraph from "../../components/Charts/BarChart";
import Table from "../../components/Table/Table";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import AddShipmentModal from "../Shipment/NewShipmentModal";
import StockAvailabilityCard from "../../components/Cards/StockAvailabilityCard";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { label: "Order Id", accessor: "orderId" },
    { label: "Shipping ID", accessor: "shippingId" },
    { label: "Dispatched Date", accessor: "deliveryTime" },
    { label: "Shipping Method", accessor: "shippingMethod" },
    { label: "Fee", accessor: "fee" },
    { label: "Status", accessor: "status" },
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
  ];

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div className="flex flex-wrap md:justify-between ms:justify-end items-center">
        <DashboardTabs />
        <div className="flex gap-2 mt-4 lg:mt-0">
          <Button
            text="Week"
            bgColor="white"
            weight="500"
            textColor="gray"
            icon={<DownArrowIcon />}
          />
          <div className="flex md:justify-start border border-[#003DFF] rounded-md">
            <button
              className="text-[#003DFF] px-4 py-2 ms:text-[12px] md:text-sm"
              onClick={() => setIsModalOpen(true)}
              style={{ boxShadow: `0px 2px 6px -1px #003DFF40` }}
            >
              Add New Product
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <DashboardCard
          title="Total Shipments"
          value="71.21"
          subtitle="vs Last week"
          trend={-3.2}
          icon={ShippingIcon}
        />
        <DashboardCard
          title="Total Orders"
          value="92"
          subtitle="vs Last week"
          trend={9.3}
          icon={PackageIcon}
        />
        <DashboardCard
          title="Revenue"
          value="$ 13.71K"
          subtitle="vs Last week"
          trend={-1.7}
          icon={PaymentIcon}
        />
        <DashboardCard
          title="Delivered"
          value="140"
          subtitle="vs Last week"
          trend={4.7}
          icon={CheckCircle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="w-full">
          <BarChartGraph />
        </div>
        <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden">
          <StockAvailabilityCard />
        </div>
      </div>

      <div className="mt-6">
        <Table columns={columns} data={shipmentData} title="Ongoing Orders" />
      </div>

      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
