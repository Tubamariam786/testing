import PropTypes from "prop-types";

const InputBox = ({ label, placeholder, id }) => {
  return (
    <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
      <label htmlFor={id} className="block tracking-wide text-gray-300 mb-2">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-transparent text-gray-500 border border-slate-500 rounded-lg py-2 px-3 mb-3 focus:outline-none"
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default InputBox;
