import { Search } from "./index";

const Main = () => {
  return (
    <div className="w-screen h-screen Main bg-[#C1C2C6] lg:p-6 p-4 xs:p-0 sm:p-0 flex justify-center items-center">
      {/* making of the box or container */}
      <div className="w-[80%] lg:w-[80%] xs:w-full sm:w-full h-[90%] lg:h-[90%] xs:h-full sm:h-full bg-[#F6F6F8] rounded-[24px] lg:rounded-[24px] xs:rounded-none sm:rounded-none xs:flex-col sm:flex-col flex flex-row lg:flex-row md:overflow-y-scroll lg:overflow-hidden xs:overflow-y-scroll sm:overflow-y-scroll pb-0 lg:pb-0 sm:pb-4">
        {/* making of left column  */}
        <div className="w-[30%] lg:w-[30%] xs:w-full sm:w-full h-full bg-[#FFFFFF] pl-10 py-4 flex flex-col justify-between items-start gap-4">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Main;
