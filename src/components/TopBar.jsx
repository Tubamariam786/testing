import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const TopBar = ({ handleModalToggle }) => {
  return (
    <div className="lg:hidden flex justify-between items-center bg-[#0b0e14] rounded-lg p-4 mb-12 border border-[#333b4d99]">
      <div>
        <p className="text-gray-50">Selected products</p>
        <p className="text-gray-50">$134.98</p>
      </div>

      <button
        onClick={handleModalToggle}
        className="text-[#f5f6fa] hover:bg-slate-500 flex items-center transition-colors duration-300 px-3 py-2 rounded-lg"
      >
        View details
        <span className="ml-2">
          <FaChevronDown style={{ fontSize: "14px" }} />
        </span>
      </button>
    </div>
  );
};

TopBar.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};

export default TopBar;
