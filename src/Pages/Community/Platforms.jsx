import platform from "../../assets/communityPlatform.png";
const Platforms = () => {
  return (
    <div className="bg-[#d3f5c638]  mb-[20px] md:mb-[100px] flex flex-col md:flex-row px-10 py-[30px] md:px-[120px] md:pt-[127px]">
      <div className="lg:w-1/3 flex flex-col">
        <h1 className=" items-center flex text-[16px]  text-[#33383D] font-[AeonikBold] lg:text-[24px] mb-4">
          Community <span className="font-[AeonikLight] ml-2 ">Platforms</span> 
        </h1>
        <p className="mb-5 mr-[10px] font-[AeonikLight] text-[12px] lg:text-[16px] lg:w-[90%]">
          Here's where you can engage with the community and get all the latest
          updates.
        </p>
      </div>
      <div className="w-[100%]">
        <img className="w-full h-auto" src={platform} alt="platforms" />
      </div>
    </div>
  );
};

export default Platforms;
