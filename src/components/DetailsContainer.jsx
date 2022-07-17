import { useContext } from "react";
import appContext from "../context/appContext";

const DetailsContainer = ({ children }) => {
  const { city } = useContext(appContext);

  return (
    <>
      <div className="w-full">
        <p className="text-center py-5 text-lavender text-lg underline underline-offset-8">
          Today in {city}
        </p>
        {/* <div className="flex flex-row md:flex-col">{children}</div> */}
        <div className="grid grid-cols-2 justify-between gap-4 p-4 space-4 md:grid-cols-1">
          {children}
        </div>
      </div>
    </>
  );
};

export default DetailsContainer;
