import { useContext } from "react";
import appContext from "../context/appContext";
import CardContainer from "./CardContainer";

const Description = () => {
  const { condition } = useContext(appContext);
  const imageUrl = `http://openweathermap.org/img/wn/${condition.icon}.png`;

  return (
    <>
      <CardContainer>
        <div className="flex flex-col py-2">
          <div className="w-full flex flex-row justify-center">
            <img src={imageUrl} height={50} width={50} alt="weather icon" />
          </div>
          <p className="text-center text-lg text-lavender font-medium">
            {condition.main}
          </p>
          <p className="text-center text-sm text-lavender font-light">
            {condition.desc}
          </p>
        </div>
      </CardContainer>
    </>
  );
};

export default Description;
