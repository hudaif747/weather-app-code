import Description from "./Description";
import DetailsContainer from "./DetailsContainer";
import HighAndLow from "./HighAndLow";
import SearchbyPin from "./SearchbyPin";
import Toggler from "./Toggler";

const RightPane = () => {
  return (
    <>
      <div className="h-full p-5 font-montserrat">
        <div className="h-full bg-primary bg-opacity-20 backdrop-blur-3xl rounded-lg">
          <DetailsContainer>
            <Description />
            <HighAndLow />
            <Toggler />
            <SearchbyPin />
          </DetailsContainer>
        </div>
      </div>
    </>
  );
};

export default RightPane;
