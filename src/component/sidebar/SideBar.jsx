function SideBar() {
  return (
    <div className="p-4 bg-gray-100 pt-40">
      <div className="  space-y-8 md:px-8  ">
        <div className=" text-xl text-blue-400 pl-14 font-bold  ">
          <h1>Sitemark</h1>
        </div>

        <div className="text pl-8">
          <h1 className="">Total</h1>
          <h1 className="text-lg font-bold">$134.98</h1>
        </div>

        <div className="main-div space-y-8  pl-8  ">
          <div className="flex justify-between  ">
            <div className="text-sm">
              <h2 className="font-semibold ">Professional Plan</h2>
              <p className="font-normal text-gray-500">Monthly subscription</p>
            </div>
            <div className="font-semibold">
              <h5>$15.00</h5>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-sm">
              <h2 className="font-semibold pr-20">Dedicated Support</h2>
              <p className="font-normal text-gray-500">
                Included in the Professional Plan
              </p>
            </div>
            <div className="font-semibold">
              <h5>Free</h5>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-sm">
              <h2 className="font-semibold pr-36">Hardware</h2>
              <p className="font-normal text-gray-500">
                Devices needed for development
              </p>
            </div>
            <div className="font-semibold">
              <h5 className="">$69.99</h5>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="text-sm">
              <h2 className="font-semibold">Landing Page Template</h2>
              <p className="font-normal text-gray-500">License</p>
            </div>
            <div className="font-semibold">
              <h5>$49.99</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
