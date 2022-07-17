import { useContext } from "react";
import appContext from "../context/appContext";
import CardContainer from "./CardContainer";

const HighAndLow = () => {
  const { condition } = useContext(appContext);

  return (
    <>
      <CardContainer>
        <div className="flex justify-between px-6 py-2">
          <p className="text-center text-base text-lavender font-thin">Low</p>
          <p className="text-xl text-lavender">
            {condition.low}&deg;<sup className="text-xs">C</sup>
          </p>
        </div>
        <div className="border-t border-t-lavender/[0.5] mx-2"></div>
        <div className="flex justify-between px-6 py-2">
          <p className="text-center text-base text-lavender font-thin">High</p>
          <p className="text-xl text-lavender">
            {condition.high}&deg;<sup className="text-xs">C</sup>
          </p>
        </div>
      </CardContainer>
    </>
  );
};

export default HighAndLow;
