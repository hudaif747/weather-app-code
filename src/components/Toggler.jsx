import { useContext, useState } from "react";
import appContext from "../context/appContext";

const Toggler = () => {
  const { togglerData } = useContext(appContext);

  const togNameArray = ["Wind Speed", "Humidity", "Pressure", "Sunrise/Sunset"];
  const valueArray = [
    togglerData.wind,
    togglerData.humidity,
    togglerData.pressure,
    togglerData.rise,
  ];

  const [currentTog, setTog] = useState(0);

  const handleToggle = (index) => {
    setTog(index);
  };

  return (
    <>
      <div className="col-span-2 md:col-span-1 w-auto bg-powderBlue/[0.1] rounded-lg h-36 md:h-44 p-2 flex flex-row">
        <div className="basis-1/3 h-full flex flex-col justify-around">
          {togNameArray.map((value, index) => {
            return (
              <Pill
                item={value}
                index={index}
                currentTog={currentTog}
                handler={handleToggle}
                key={index}
              />
            );
          })}
        </div>
        <div className="basis-2/3 flex flex-col justify-center">
          <p className="text-center text-xl text-lavender font-light ">
            {valueArray[currentTog]}
          </p>
        </div>
      </div>
    </>
  );
};

const Pill = ({ item, index, handler, currentTog }) => {
  return (
    <>
      <button
        onClick={() => handler(index)}
        className={`text-xs text-center w-28 p-1 md:p-2 rounded-lg ${
          index === currentTog
            ? "text-bgColor bg-lavender"
            : "text-lavender bg-powderBlue/[0.1] "
        }`}
      >
        {item}
      </button>
    </>
  );
};
export default Toggler;
