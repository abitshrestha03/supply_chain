import DashboardCard from "../../components/Cards/DashboardCards";
import TabNavigation from "../../components/Tabs/TabNavigation";
import RefundsTable from "./RefundsTable";

const Refunds = () => {
  const tabs = [
    "All",
    "Pending Requests",
    "Approved Requests",
    "Rejected Requests",
  ];

  const columns = [
    "Order Id",
    "Date",
    "Customer ID",
    "Sales Representative",
    "Reason",
    "Status",
    "Action",
  ];

  const data = [
    {
      "Order Id": "ABC2429Z",
      Date: "2025/01/02",
      "Customer ID": "#CUS123456",
      "Sales Representative": "Michael Johnson",
      Reason: "Damaged Goods",
      Status: "Pending",
    },
    {
      "Order Id": "ABC2429Z",
      Date: "2025/01/02",
      "Customer ID": "#CUS123456",
      "Sales Representative": "John Mayer",
      Reason: "Wrong Order",
      Status: "Rejected",
    },
    {
      "Order Id": "ABC2429Z",
      Date: "2025/01/02",
      "Customer ID": "#CUS123456",
      "Sales Representative": "John Gotti",
      Reason: "Damaged Goods",
      Status: "Pending",
    },
  ];

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div className="grid ms:grid-cols-2 md:grid-cols-4 gap-4">
        <DashboardCard
          title="Pending Requests"
          value="23"
          subtitle="vs Last week"
          trend={+1.3}
        />
        <DashboardCard
          title="Refund Amount"
          value="Rs 12,021"
          subtitle="vs Last week"
          trend={+0.92}
        />
        <DashboardCard
          title="Total Returned Items"
          value="12"
          subtitle="vs Last week"
          trend={-1.7}
        />
        <DashboardCard
          title="Request Approved"
          value="12"
          subtitle="vs Last week"
          trend={-9.02}
        />
      </div>
      <div className="py-4">
        <TabNavigation tabs={tabs} />
      </div>
      <div className="py-4">
        <RefundsTable columns={columns} data={data}  showRightArrow={true}/>
      </div>
    </div>
  );
};

export default Refunds;
