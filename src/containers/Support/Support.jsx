import SupportImage from "../../assets/images/SupportImage.png";
import ProfilePhoto from "../../assets/images/Ellipse.png";
import ScalaImage from "../../assets/images/ScalaImage.png";

const Support = () => {
  return (
    <div className="bg-body-color ms:w-[100vw] md:w-full min-h-screen flex flex-col p-4 lg:p-6 md:mt-20">
      {/* Container for the Help Center */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="lg:w-3/4 w-full bg-white shadow-lg rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Help Center</h1>
            <div className="mb-4 flex items-center justify-between bg-gray-100 p-4 rounded-lg">
              <p className="font-medium text-gray-800">
                Lorem Ipsum passage, and going through the cites of the word in
                classical literature?
              </p>
              <img
                src={ProfilePhoto}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border flex space-x-2">
              <div
                className="bg-white w-[350px] h-[55px] rounded-full flex items-center justify-center"
                style={{ boxShadow: `0px 0px 4px 0px #00000040` }}
              >
                <img
                  src={ScalaImage}
                  alt="User"
                  className="w-[42px] h-[31px] rounded-full object-cover"
                />
              </div>

              <p className="text-gray-700 leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC.
              </p>
            </div>
          </div>
          {/* Input Area */}
          <div
            className="flex-grow outline-none bg-transparent"
            style={{
              boxShadow: `1px 2px 7px 0px #0000001F inset`,
            }}
          >
            <input
              type="text"
              placeholder="Queries relating supply chain application? Ask Away...."
              className="flex-grow outline-none bg-transparent"
              style={{ height: `100px` }}
            />
            <div className="px-4 pt-2 gap flex gap-2 bg-[#F6F6F6] pb-3">
              <button
                className="text-[#003DFF] px-2 py-1 rounded-full text-sm flex gap-2 items-center"
                style={{ border: `1px solid #0000001A` }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1V17M5 6V12M17 7V11M1 7V11M13 4V14"
                    stroke="#003DFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Voice Message
              </button>
              <button
                className="text-[#FF0000] px-2 py-1 rounded-full text-sm flex items-center gap-2"
                style={{ border: `1px solid #0000001A` }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5.25V5.5H14V5.25C14 4.71957 13.7893 4.21086 13.4142 3.83579C13.0391 3.46071 12.5304 3.25 12 3.25C11.4696 3.25 10.9609 3.46071 10.5858 3.83579C10.2107 4.21086 10 4.71957 10 5.25ZM8.75 5.5V5.25C8.75 4.38805 9.09241 3.5614 9.7019 2.9519C10.3114 2.34241 11.138 2 12 2C12.862 2 13.6886 2.34241 14.2981 2.9519C14.9076 3.5614 15.25 4.38805 15.25 5.25V5.5H20.875C21.0408 5.5 21.1997 5.56585 21.3169 5.68306C21.4342 5.80027 21.5 5.95924 21.5 6.125C21.5 6.29076 21.4342 6.44973 21.3169 6.56694C21.1997 6.68415 21.0408 6.75 20.875 6.75H19.4165L18.4165 18.678C18.3405 19.5838 17.927 20.428 17.2579 21.0433C16.5888 21.6586 15.713 22 14.804 22H9.196C8.2871 21.9999 7.41139 21.6584 6.7424 21.0431C6.07341 20.4279 5.65997 19.5837 5.584 18.678L4.584 6.75H3.125C2.95924 6.75 2.80027 6.68415 2.68306 6.56694C2.56585 6.44973 2.5 6.29076 2.5 6.125C2.5 5.95924 2.56585 5.80027 2.68306 5.68306C2.80027 5.56585 2.95924 5.5 3.125 5.5H8.75ZM6.8295 18.5735C6.87927 19.1669 7.15015 19.72 7.58845 20.1231C8.02676 20.5262 8.60051 20.75 9.196 20.75H14.804C15.3996 20.7501 15.9735 20.5264 16.4119 20.1233C16.8503 19.7201 17.1212 19.167 17.171 18.5735L18.162 6.75H5.838L6.8295 18.5735ZM10.75 10.125C10.75 10.0429 10.7338 9.96165 10.7024 9.88582C10.671 9.80999 10.625 9.74109 10.5669 9.68306C10.5089 9.62502 10.44 9.57898 10.3642 9.54757C10.2883 9.51617 10.2071 9.5 10.125 9.5C10.0429 9.5 9.96165 9.51617 9.88582 9.54757C9.80999 9.57898 9.74109 9.62502 9.68306 9.68306C9.62502 9.74109 9.57898 9.80999 9.54757 9.88582C9.51617 9.96165 9.5 10.0429 9.5 10.125V17.375C9.5 17.4571 9.51617 17.5383 9.54757 17.6142C9.57898 17.69 9.62502 17.7589 9.68306 17.8169C9.74109 17.875 9.80999 17.921 9.88582 17.9524C9.96165 17.9838 10.0429 18 10.125 18C10.2071 18 10.2883 17.9838 10.3642 17.9524C10.44 17.921 10.5089 17.875 10.5669 17.8169C10.625 17.7589 10.671 17.69 10.7024 17.6142C10.7338 17.5383 10.75 17.4571 10.75 17.375V10.125ZM13.875 9.5C14.22 9.5 14.5 9.78 14.5 10.125V17.375C14.5 17.5408 14.4342 17.6997 14.3169 17.8169C14.1997 17.9342 14.0408 18 13.875 18C13.7092 18 13.5503 17.9342 13.4331 17.8169C13.3158 17.6997 13.25 17.5408 13.25 17.375V10.125C13.25 9.78 13.53 9.5 13.875 9.5Z"
                    fill="#FF0000"
                  />
                </svg>
                Delete Chat
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/4 w-full bg-white shadow-lg rounded-lg py-4">
          <h2 className="text-xl font-semibold mb-4 px-2">Prompts</h2>
          <ul className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <li
                key={index}
                className="flex gap-2 hover:bg-gray-200 cursor-pointer border-b border-gray-300"
              >
                <img src={SupportImage} alt="Icon" className="w-8 h-8" />
                <p className="text-gray-700">
                  Lorem Ipsum passage, and going through the cites of the word
                  in classical literature?
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
