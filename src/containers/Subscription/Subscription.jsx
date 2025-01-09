import  { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for validation

const SubscriptionCard = ({
  title,
  price,
  billing,
  note,
  highlighted,
  onSelect,
  selected,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 border rounded-xl cursor-pointer transition ${
        selected
          ? "border-[#003DFF80] bg-[#003DFF0D] shadow-[0px_0px_6px_0px_#003DFF4D]"
          : "border-gray-300"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex w-full border-b-2 pb-2 border-[#00000033] gap-2">
          <input
            type="radio"
            className="w-5"
            checked={selected} // Conditionally check the radio button
            readOnly // Prevent the user from manually checking it
          />
          <div className="text-lg font-semibold">{title}</div>
        </div>
        {highlighted && (
          <div className="px-2 py-1 text-xs text-white bg-blue-500 rounded-md">
            {highlighted}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold">{price}</div>
      <div className="text-sm text-gray-600">{billing}</div>
      {note && (
        <div className="mt-2 px-3 py-1 text-xs text-[#005C9D] bg-[#26A5FF33] rounded-sm inline">
          {note}
        </div>
      )}
    </div>
  );
};

SubscriptionCard.propTypes = {
    title: PropTypes.string.isRequired,        // `title` should be a string (required)
    price: PropTypes.string.isRequired,        // `price` should be a string (required)
    billing: PropTypes.string.isRequired,      // `billing` should be a string (required)
    note: PropTypes.string,                    // `note` should be a string (optional)
    highlighted: PropTypes.string,             // `highlighted` can be a string or null (optional)
    onSelect: PropTypes.func.isRequired,       // `onSelect` should be a function (required)
    selected: PropTypes.bool.isRequired,       // `selected` should be a boolean (required)
  };

const Subscriptions = () => {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const options = [
    {
      title: "Monthly",
      price: "Rs 4,000 / mo",
      billing: "Billed Monthly",
      note: "Free 15-day trial",
    },
    {
      title: "Quarterly",
      price: "Rs 14,000 / mo",
      billing: "Billed Quarterly",
      note: "Save 12 %",
    },
    {
      title: "Annual",
      price: "Rs 34,000 / mo",
      billing: "Billed Yearly",
      note: "Save 35 %",
    },
  ];

  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      <div className="w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Supply chain Pro</h1>
        <p className="text-gray-600 mb-6">
          Choose the subscription option that suits your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {options.map((option) => (
            <SubscriptionCard
              key={option.title}
              {...option}
              selected={selectedOption === option.title}
              onSelect={() => setSelectedOption(option.title)}
            />
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-600">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Unlimited Access</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Advanced Progress Tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Exclusive Access to New Features</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Priority Support</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Downloadable Resources</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Full Flexibility</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Customer Management</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Secure Payment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Start Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
