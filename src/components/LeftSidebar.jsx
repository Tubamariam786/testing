import Bill from "./Bill";

const LeftSidebar = () => {
  return (
    <div className="lg:w-1/3 min-h-screen bg-[#0c1017] border-e border-[#333b4d99] p-6 hidden lg:block">
      <div className="mt-20 px-12">
        <Bill />
      </div>
    </div>
  );
};

export default LeftSidebar;
