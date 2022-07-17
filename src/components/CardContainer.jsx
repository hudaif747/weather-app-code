const CardContainer = ({ children }) => {
  return (
    <>
      {/* <div className="w-auto m-1 md:m-4 bg-powderBlue/[0.1] rounded-lg h-36 flex flex-col justify-center"> */}
      <div className="col-span-1 bg-powderBlue/[0.1] rounded-lg h-18 md:h-36 flex flex-col justify-center">
        {children}
      </div>
    </>
  );
};

export default CardContainer;
