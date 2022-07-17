import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Homescreen = () => {
  return (
    <>
      <div className="bg-bgColor h-screen flex flex-col md:flex-row">
        <div className="basis-4/6 lg:basis-3/4 md:basis-3/5">
          <LeftPane />
        </div>
        <div className="basis-2/6 lg:basis-1/4 md:basis-2/5 bg-bgColor">
          <RightPane />
        </div>
      </div>
    </>
  );
};

export default Homescreen;
