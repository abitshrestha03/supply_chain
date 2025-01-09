
const RestockVariants = ({ variants }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Restock Variants</h3>
      {variants.map((variant, index) => (
        <div key={index} className="flex items-center justify-between mb-2">
          <span>{variant.name}</span>
          <span>{variant.size}</span>
          <span>{variant.units} units</span>
        </div>
      ))}
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Variant
      </button>
    </div>
  );
};

export default RestockVariants;
