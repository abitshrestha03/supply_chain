import React from 'react';

const ProductDescription = ({ description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Product Description</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductDescription;
