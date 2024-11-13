import SideBar from "./component/sidebar/SideBar";
import Checkbox from "./component/multiple/Checkbox";

function App() {
  return (
    <div className="w-full flex">
      <div className="w-2/5 bg-gray-400 hidden md:display ">
        <SideBar />
      </div>
      <div className="w-3/5 bg-gray-700 mx-auto px-10">
        <Checkbox />
      </div>
    </div>
  );
}

export default App;
