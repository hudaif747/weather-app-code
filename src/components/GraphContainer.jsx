import ChartComponent from "./ChartComponent";

const GraphContainer = () => {
  return (
    <>
      <div className="h-3/4 md:h-1/2 flex flex-col justify-center w-full pt-20 pb-8 md:py-8">
        <p className="text-xl text-lavender font-montserrat px-4 py-1 font-light">
          Forecast
        </p>
        <div className="border-t border-t-lavender/[0.5] mx-3"></div>
        <div className="h-full min-h-full p-10">
          <ChartComponent />
        </div>
      </div>
    </>
  );
};

export default GraphContainer;
