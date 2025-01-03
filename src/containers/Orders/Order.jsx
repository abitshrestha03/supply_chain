import { useState } from "react";
import DashboardCard from "../../components/Cards/DashboardCards";
import OrdersTable from "../../components/Table/OrdersTable";
import AddShipmentModal from "../Shipment/NewShipmentModal";

const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full  h-screen flex flex-col md:ps-2 md:pe-6 md:py-4 md:mt-12 ms:px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div></div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
            className="bg-[#003DFF] ms:text-[12px] md:text-lg text-white rounded-md shadow-lg px-4 py-2 ms:mt-4 md:mt-0"
            onClick={() => setIsModalOpen(true)}
          >
            + New Shipment
          </button>
        </div>
      </div>
      <div className="grid ms:grid-cols-2 md:grid-cols-4 gap-4 md:mt-8 ms:mt-4">
        <DashboardCard
          title="Total Orders"
          value="512"
          subtitle="vs Last week"
          trend={+2.11}
        />
        <DashboardCard
          title="Order Fulfilled"
          value="92%"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Order Delivered"
          value="98%"
          subtitle="vs Last week"
          trend={+1.12}
        />
        <DashboardCard
          title="Order Cancelled"
          value="2%"
          subtitle="vs Last week"
          trend={-0.27}
        />
      </div>
      <div className="h-[50px]">
        <OrdersTable />
      </div>
      {/* Add Shipment Modal */}
      <AddShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Order;
