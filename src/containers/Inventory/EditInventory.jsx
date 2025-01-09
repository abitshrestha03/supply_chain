import React, { useState } from "react";

const EditInventory = () => {
  const [images, setImages] = useState([null, null, null]);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    }
  };

  const handleReplaceImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null; // Reset the specific image slot
    setImages(updatedImages);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null; // Remove the image
    setImages(updatedImages);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-12">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Description Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Description</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value="Sunblock SPF-30 - 2025 V1 Yellow"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product Description
                </label>
                <textarea
                  rows="6"
                  value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
              </div>
            </div>

            {/* Category Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Category</h2>
              <label className="block text-sm font-medium mb-1">
                Product Category
              </label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>Skincare Products</option>
              </select>
            </div>

            {/* Inventory Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Inventory</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value="150"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">SKU</label>
                  <input
                    type="text"
                    value="ABC-2429Z"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Product Images Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Product Images</h2>
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-40 h-36 rounded-lg overflow-hidden border-2 border-dashed border-[#003DFF] group"
                  >
                    {!image ? (
                      <label
                        htmlFor={`image-upload-${index}`}
                        className="flex flex-col items-center justify-center h-full cursor-pointer text-blue-500"
                      >
                        <svg
                          width="36"
                          height="35"
                          viewBox="0 0 36 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.59375 18C7.23167 18 4.96633 17.0617 3.29608 15.3914C1.62583 13.7212 0.6875 11.4558 0.6875 9.09375C0.6875 6.73167 1.62583 4.46633 3.29608 2.79608C4.96633 1.12583 7.23167 0.1875 9.59375 0.1875C11.9558 0.1875 14.2212 1.12583 15.8914 2.79608C17.5617 4.46633 18.5 6.73167 18.5 9.09375C18.5 11.4558 17.5617 13.7212 15.8914 15.3914C14.2212 17.0617 11.9558 18 9.59375 18ZM10.7812 3.45312C10.7812 3.21692 10.6874 2.99038 10.5204 2.82336C10.3534 2.65633 10.1268 2.5625 9.89062 2.5625C9.65442 2.5625 9.42788 2.65633 9.26086 2.82336C9.09383 2.99038 9 3.21692 9 3.45312V7.90625H4.54688C4.31067 7.90625 4.08413 8.00008 3.91711 8.16711C3.75008 8.33413 3.65625 8.56067 3.65625 8.79688C3.65625 9.03308 3.75008 9.25962 3.91711 9.42664C4.08413 9.59367 4.31067 9.6875 4.54688 9.6875H9V14.1406C9 14.3768 9.09383 14.6034 9.26086 14.7704C9.42788 14.9374 9.65442 15.0312 9.89062 15.0312C10.1268 15.0312 10.3534 14.9374 10.5204 14.7704C10.6874 14.6034 10.7812 14.3768 10.7812 14.1406V9.6875H15.2344C15.4706 9.6875 15.6971 9.59367 15.8641 9.42664C16.0312 9.25962 16.125 9.03308 16.125 8.79688C16.125 8.56067 16.0312 8.33413 15.8641 8.16711C15.6971 8.00008 15.4706 7.90625 15.2344 7.90625H10.7812V3.45312ZM4.25 18.3515C4.63158 18.5724 5.02742 18.7695 5.4375 18.9429V29.2812C5.4375 29.9819 5.61088 30.6445 5.91844 31.224L17.5797 19.4618C17.8557 19.1836 18.184 18.9627 18.5458 18.812C18.9076 18.6613 19.2956 18.5837 19.6875 18.5837C20.0794 18.5837 20.4674 18.6613 20.8292 18.812C21.191 18.9627 21.5193 19.1836 21.7953 19.4618L33.4566 31.224C33.7727 30.6253 33.9378 29.9583 33.9375 29.2812V9.09375C33.9375 7.99144 33.4996 6.93429 32.7202 6.15484C31.9407 5.37539 30.8836 4.9375 29.7812 4.9375H19.4429C19.2705 4.5298 19.073 4.13321 18.8515 3.75H29.7812C31.1985 3.75 32.5577 4.313 33.5599 5.31515C34.562 6.3173 35.125 7.6765 35.125 9.09375V29.2812C35.125 30.6985 34.562 32.0577 33.5599 33.0599C32.5577 34.062 31.1985 34.625 29.7812 34.625H9.59375C8.1765 34.625 6.8173 34.062 5.81515 33.0599C4.813 32.0577 4.25 30.6985 4.25 29.2812V18.3515ZM9.59375 33.4375H29.7812C30.9426 33.4375 31.9924 32.9625 32.7464 32.1942L20.9522 20.2978C20.7866 20.1309 20.5896 19.9983 20.3725 19.9079C20.1555 19.8175 19.9226 19.7709 19.6875 19.7709C19.4524 19.7709 19.2195 19.8175 19.0025 19.9079C18.7854 19.9983 18.5884 20.1309 18.4228 20.2978L6.62856 32.1942C7.01547 32.588 7.47695 32.9007 7.98606 33.1142C8.49517 33.3277 9.0417 33.4376 9.59375 33.4375ZM30.375 13.25C30.375 14.3523 29.9371 15.4095 29.1577 16.1889C28.3782 16.9684 27.3211 17.4062 26.2188 17.4062C25.1164 17.4062 24.0593 16.9684 23.2798 16.1889C22.5004 15.4095 22.0625 14.3523 22.0625 13.25C22.0625 12.1477 22.5004 11.0905 23.2798 10.3111C24.0593 9.53164 25.1164 9.09375 26.2188 9.09375C27.3211 9.09375 28.3782 9.53164 29.1577 10.3111C29.9371 11.0905 30.375 12.1477 30.375 13.25ZM29.1875 13.25C29.1875 12.4626 28.8747 11.7075 28.318 11.1508C27.7612 10.594 27.0061 10.2812 26.2188 10.2812C25.4314 10.2812 24.6763 10.594 24.1195 11.1508C23.5628 11.7075 23.25 12.4626 23.25 13.25C23.25 14.0374 23.5628 14.7925 24.1195 15.3492C24.6763 15.906 25.4314 16.2188 26.2188 16.2188C27.0061 16.2188 27.7612 15.906 28.318 15.3492C28.8747 14.7925 29.1875 14.0374 29.1875 13.25Z"
                            fill="#003DFF"
                          />
                        </svg>

                        <span className="underline text-[#003DFF] text-xs font-semibold mt-2">
                          Click to Upload
                        </span>
                        <span className="text-gray-500 text-xs">
                          or drag and drop
                        </span>
                        <input
                          id={`image-upload-${index}`}
                          type="file"
                          accept="image/*"
                          onChange={(event) => handleImageUpload(index, event)}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="relative group-hover:opacity-75">
                        <img
                          src={image}
                          alt={`Uploaded Preview ${index + 1}`}
                          className="w-40 h-36 object-cover group-hover:brightness-50"
                        />
                        <button
                          onClick={() => handleReplaceImage(index)}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs px-2 py-1 rounded hidden group-hover:block"
                        >
                          Replace
                        </button>
                        <button
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-4 bg-white text-black text-xs px-2 py-1 rounded hidden group-hover:block"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping and Delivery Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Shipping and Delivery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Product Weight
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value="0.2"
                      className="w-1/2 px-4 py-2 border rounded-lg"
                    />
                    <select className="w-1/2 px-4 py-2 border rounded-lg">
                      <option>kg</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value="15.00"
                      className="w-2/3 px-4 py-2 border rounded-lg"
                    />
                    <select className="w-1/3 px-4 py-2 border rounded-lg">
                      <option>Rs</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">
                  Package Size (Size of packaged used while shipping)
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value="12"
                      className="w-1/2 px-4 py-2 border rounded-lg"
                    />
                    <select className="w-1/2 px-4 py-2 border rounded-lg">
                      <option>in</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value="2"
                      className="w-1/2 px-4 py-2 border rounded-lg"
                    />
                    <select className="w-1/2 px-4 py-2 border rounded-lg">
                      <option>in</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value="4"
                      className="w-1/2 px-4 py-2 border rounded-lg"
                    />
                    <select className="w-1/2 px-4 py-2 border rounded-lg">
                      <option>in</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Variant Section */}
            <div className="flex items-center justify-between border rounded px-4 py-2">
              <label className="text-sm font-medium text-gray-700">
                Product Variants
              </label>
              <button
                className="text-sm text-custom-blue font-semibold hover:underline"
                onClick={() => console.log("Add Variant clicked!")}
              >
                + Add Variant
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-2 bg-custom-blue text-white rounded-lg">
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditInventory;
