import GraphContainer from "./GraphContainer";
import TemperatureCard from "./TemperatureCard";

const LeftPane = () => {
  return (
    <>
      <div className="w-full h-[75vh] md:h-screen flex flex-col">
        <TemperatureCard />
        <GraphContainer />
      </div>
    </>
  );
};

export default LeftPane;
