import DashboardCard from "../../components/Cards/DashboardCards";
import RefundsTable from "../Refunds/RefundsTable";

const SalesPersonnel = () => {
  const columns = [
    "Name",
    "Email",
    "Contact",
    "Stores",
    "Assigned Area",
    "Performance",
    "Action",
  ];

  const data = [
    {
      Name: "John Doe",
      Email: "johndoe21@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Excellent",
      Action: "Manage",
    },
    {
      Name: "Jane Doe",
      Email: "janedoe21@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Average",
      Action: "Manage",
    },
    {
      Name: "Ramesh Adhikari",
      Email: "ramesh11@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Good",
      Action: "Manage",
    },
    {
      Name: "Sarah Thompson",
      Email: "sarahtpn@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Bad",
      Action: "Manage",
    },
    {
      Name: "Saurav Ganguli",
      Email: "sauravg12@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Excellent",
      Action: "Manage",
    },
    {
      Name: "John Cena",
      Email: "ucantseemee@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Average",
      Action: "Manage",
    },
    {
      Name: "Ram Maharjan",
      Email: "rammhr24@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Excellent",
      Action: "Manage",
    },
    {
      Name: "Sunny Deol",
      Email: "sunny@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Excellent",
      Action: "Manage",
    },
    {
      Name: "Ram Deula",
      Email: "deularam@gmail.com",
      Contact: "+977-9129394567",
      Stores: 24,
      "Assigned Area": "Ason, Kathmandu",
      Performance: "Good",
      Action: "Manage",
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
        <RefundsTable columns={columns} data={data} showRightArrow={false}/>
      </div>
    </div>
  );
};

export default SalesPersonnel;
