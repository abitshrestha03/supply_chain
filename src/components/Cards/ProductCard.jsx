import Stock1 from "../../assets/images/stock1.png";
import Stock2 from "../../assets/images/stock2.png";

const ProductCard = () => {
  return (
    <div className="mx-auto bg-white rounded-lg overflow-hidden border">
      <div className="flex items-start p-4">
        <div className="flex-shrink-0 space-y-4">
          <div
            className="rounded-lg px-2"
            style={{ border: `1px solid #DCDCDC` }}
          >
            <img
              src={Stock1}
              alt="Product Image"
              className="w-28 h-28 object-cover rounded-lg"
            />
          </div>
          <div
            className="rounded-lg px-2"
            style={{ border: `1px solid #DCDCDC` }}
          >
            <img
              src={Stock2}
              alt="Product Variant Image"
              className="w-28 h-28 object-cover rounded-md"
            />
          </div>
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="text-3xl font-normal">
            Sunblock SPF-30 - 2025 V1 Yellow
          </h2>
          <div className="text-sm mt-2">
            <p className="flex text-black mb-2">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                FKU
              </span>{" "}
              ABC-2429Z
            </p>
            <p className="flex text-black mb-2">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Category
              </span>{" "}
              Skincare products
            </p>
            <p className="flex text-black mb-2">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Price
              </span>{" "}
              $35.00
            </p>
            <p className="flex text-black mb-2">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Size
              </span>{" "}
              12 oz
            </p>
            <p className="flex text-black mb-2">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Stock
              </span>{" "}
              24
            </p>
            <p className="flex text-black mb-2 items-center">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Status
              </span>{" "}
              <span className="text-red-500 text-sm font-semibold bg-red-100 px-2 py-1 rounded-md">
                Low
              </span>
            </p>
            <p className="flex text-black mb-2 items-center">
              <span className="font-semibold text-[#00000099] w-[7vw]">
                Variants
              </span>{" "}
              <span className="text-blue-500 text-sm font-semibold bg-blue-100 px-2 py-1 rounded-md">
                8 flavors
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
