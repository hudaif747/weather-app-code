import { useContext, useState } from "react";
import SearchIcon from "../assets/search";
import appContext from "../context/appContext";

const SearchbyPin = () => {
  const { setZipCode } = useContext(appContext);

  const [zip, setZip] = useState();

  const handleChange = (e) => {
    setZip(e.target.value);
  };

  const submitZip = () => {
    setZipCode(zip);
  };

  return (
    <>
      <div className="col-span-2 md:col-span-1 bg-powderBlue/[0.1] rounded-lg flex flex-col  justify-center p-2">
        <div className="flex flex-row justify-between">
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            className="w-full p-2 bg-powderBlue/[0.2] rounded-lg placeholder:text-powderBlue/[0.75] placeholder:text-sm focus:ring-primary focus:ring text-lavender"
            placeholder="Search by Zipcode"
          />
          <button
            className="flex flex-col px-2 mx-1 transition-all rounded-lg justify-center hover:bg-primary/[0.5]"
            onClick={submitZip}
          >
            <SearchIcon />
          </button>
        </div>
        <p className="text-xs text-lavender/[0.5] font-light">
          *Can only search USA Zip Code
        </p>
      </div>
    </>
  );
};

export default SearchbyPin;
