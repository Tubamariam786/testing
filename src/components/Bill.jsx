import BillItem from "./BillItem";

function Bill() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-md font-bold text-gray-300">Total</h2>
        <h3 className="text-2xl font-semibold">$134.98</h3>
      </div>

      <BillItem />
      <BillItem />
      <BillItem />
      <BillItem />
    </div>
  );
}

export default Bill;
