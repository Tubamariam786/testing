import InputBox from "./InputBox";

const Forms = () => {
  return (
    <form className="space-y-4">
      <div className="flex flex-wrap -mx-3 mb-3 lg:max-w-[600px]">
        <InputBox label="First Name*" id="fName" placeholder="John" />
        <InputBox label="Last Name*" id="lName" placeholder="Snow" />
      </div>
    </form>
  );
};

export default Forms;
