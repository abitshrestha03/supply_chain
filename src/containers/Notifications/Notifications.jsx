import PropTypes from "prop-types"; // Import PropTypes

const NotificationCard = ({
  message,
  detail,
  time,
  highlighted,
  isFirst,
  isLast,
  icon,
}) => {
  return (
    <div
      className={`flex items-start justify-between px-4 py-5 shadow-sm ${
        highlighted ? "bg-blue-50" : "bg-white"
      } border-b border-[#0000001A] ${isFirst ? "rounded-t-lg" : ""} ${
        isLast ? "rounded-b-lg" : ""
      }`}
    >
      <div className="flex gap-8">
        <div
          className="bg-white rounded-full shadow-md w-10 h-10 flex items-center justify-center"
          style={{
            boxShadow: "0px 1px 4px 0px #00000040",
            border: `1px solid #0000000D`,
          }} // Inline style as a JS object
        >
          {" "}
          {icon}
        </div>{" "}
        <div>
          <div className="text-sm font-medium text-gray-800">{message}</div>
          <div className="text-sm text-gray-600">{detail}</div>
        </div>
      </div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  );
};

// Prop validation for NotificationCard
NotificationCard.propTypes = {
  message: PropTypes.string.isRequired, // `message` should be a required string
  detail: PropTypes.string.isRequired, // `detail` should be a required string
  time: PropTypes.string.isRequired, // `time` should be a required string
  highlighted: PropTypes.bool, // `highlighted` should be a boolean (optional)
  isFirst: PropTypes.bool, // `isFirst` should be a boolean (optional)
  isLast: PropTypes.bool, // `isLast` should be a boolean (optional)
  icon: PropTypes.node, // `isLast` should be a boolean (optional)
};

const notifications = [
  {
    message: "Low stock alert!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "5 min",
    highlighted: true,
    icon: (
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L0 19H22M11 4L18.53 17H3.47M10 8V12H12V8M10 14V16H12V14"
          fill="black"
        />
      </svg>
    ),
  },
  {
    message: "Restock Reminder!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "35 min",
    highlighted: true,
    icon: (
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 21.5C9.182 21.5 8.4 21.17 6.837 20.51C2.946 18.866 1 18.043 1 16.66V6.5M10 21.5C10.818 21.5 11.6 21.17 13.163 20.51C17.054 18.866 19 18.043 19 16.66V6.5M10 21.5V10.855M4 11.5L6 12.5M15 3.5L5 8.5M6.326 9.191L3.405 7.778C1.802 7.002 1 6.614 1 6C1 5.386 1.802 4.998 3.405 4.222L6.325 2.809C8.13 1.936 9.03 1.5 10 1.5C10.97 1.5 11.871 1.936 13.674 2.809L16.595 4.222C18.198 4.998 19 5.386 19 6C19 6.614 18.198 7.002 16.595 7.778L13.675 9.191C11.87 10.064 10.97 10.5 10 10.5C9.03 10.5 8.129 10.064 6.326 9.191Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    message: "Order Completed!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "1 hr",
    highlighted: false,
    icon: (
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.965 2.20492L16.555 0.794922L10.215 7.13492L11.625 8.54492L17.965 2.20492ZM22.205 0.794922L11.625 11.3749L7.445 7.20492L6.035 8.61492L11.625 14.2049L23.625 2.20492L22.205 0.794922ZM0.375 8.61492L5.965 14.2049L7.375 12.7949L1.795 7.20492L0.375 8.61492Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    message: "Excess Stock!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "2 hr",
    highlighted: false,
  },
  {
    message: "Restock Reminder!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "2 hr",
    highlighted: false,
  },
  {
    message: "Excess Stock!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "3 hr",
    highlighted: false,
  },
  {
    message: "Low stock alert!",
    detail: "Product: ABC (SKU: 12345) has dropped below the threshold.",
    time: "25 Dec, 2024",
    highlighted: false,
  },
];

const Notifications = () => {
  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div className="w-full">
        <div className="flex items-center justify-between p-4">
          <div></div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
              Filter
            </button>
            <button className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100">
              Mark As Read
            </button>
          </div>
        </div>
        <div className="shadow-md">
          {notifications.map((notification, index) => (
            <NotificationCard
              key={index}
              message={notification.message}
              detail={notification.detail}
              time={notification.time}
              icon={notification.icon}
              highlighted={notification.highlighted}
              isFirst={index === 0} // First item
              isLast={index === notifications.length - 1} // Last item
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop validation for Subscription component (Notifications list)
Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      highlighted: PropTypes.bool.isRequired,
    })
  ).isRequired, // `notifications` should be an array of objects, where each object has the required keys
};

export default Notifications;
