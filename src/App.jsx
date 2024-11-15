import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import TopBar from "./components/TopBar";
import Forms from "./components/Forms";
import SmallScreenModal from "./components/SmallScreenModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white">
      <div className="flex lg:flex-row flex-col">
        {/* Left Section (Order Summary) */}
        <LeftSidebar />

        {/* Right Section (Shipping Form) */}
        <div className="lg:w-2/3 w-full p-6 mt-24 sm:w-[80%] mx-auto">
          {/* Top Bar for smaller screens */}
          <TopBar handleModalToggle={handleModalToggle} />

          <Forms />
        </div>
      </div>

      {/* Modal for smaller screens */}
      <SmallScreenModal
        showModal={showModal}
        handleModalToggle={handleModalToggle}
      />
    </div>
  );
}

export default App;
