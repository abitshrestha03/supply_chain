import ProfilePhoto1 from "../../assets/images/ProfilePhoto1.png";

const Settings = () => {
  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div>
        {/* Header */}
        <div className="mb-6">
          <button className="text-blue-500 text-sm flex items-center">
            <span
              className="bg-white px-3 py-2 rounded-lg"
              style={{ boxShadow: `0px 1px 4px 0px #00000040` }}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15L0.999999 8L8 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ml-4 text-black text-2xl font-semibold">
              Edit Profile
            </span>
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold mb-6">Basic Information</h2>
            <div className="flex flex-col items-center mb-4">
              <img
                className="w-20 h-20 rounded-full mb-2"
                src={ProfilePhoto1}
                alt="Profile"
              />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value="Ram"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value="Shrestha"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value="Ram's Retail Store"
                />
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    value="Ram's Retail Store"
                  />
                </div>
                <button className="text-blue-500 border border-blue-500 rounded-lg px-3 py-2 text-sm">
                  Change Address
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  value="ramshstore@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center">
                  <select className="block rounded-l-md border-gray-300 bg-gray-100 px-2 py-2 text-sm">
                    <option>+977</option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 block w-full rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="mt-4 bg-custom-blue text-white rounded-lg px-4 py-2">
                Request Changes
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold mb-4">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="mt-4 text-[#003DFF] border border-[#003DFF] rounded-lg px-4 py-4 font-semibold"
                  style={{ boxShadow: `0px 2px 6px -1px #003DFF40`,border: `1px solid #003DFF` }}
                >
                  Change Password
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold mb-4">Notification Settings</h2>
              <div className="space-y-4">
                {[
                  "Order Confirmation",
                  "Order Delayed",
                  "Order Delivered",
                  "Email Notifications",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-gray-500">
                        Get notifications for this setting.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="toggle-checkbox h-5 w-10 rounded-full bg-gray-300 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
