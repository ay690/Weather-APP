/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Search,
  Primarydata,
  Secondarydata,
  UVindex,
  WindStatus,
  SunTime,
  Humidity,
  AirQuality,
} from "./index";

const Main = () => {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
  //   const api_key = "";
  const [wdata, setWdata] = useState({
    weather: {
      description: "",
    },
  });
  const [search, setSearch] = useState("Mumbai");
  const [clickName, setClickName] = useState("cel");
  const [celbtnactive, setCelBtnActive] = useState(true);
  const [fahbtnactive, setFahBtnActive] = useState(false);

  const fetchAPI = async () => {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?&city=${search}&key=${api_key}`
    );
    const result = await response.json();
    const data = result?.data[0];
    setWdata(data);

    console.log(data);
  };

  useEffect(() => {
    fetchAPI();
  }, [search]);

  const getDataFromSearchBar = (Childdata) => {
    setSearch(Childdata);
  };

  const celClick = () => {
    setClickName("cel");
    setCelBtnActive(true);
    setFahBtnActive(false);
  };

  const fahClick = () => {
    setClickName("fah");
    setCelBtnActive(false);
    setFahBtnActive(true);
  };

  return (
    <div className="w-screen h-screen Main bg-[#C1C2C6] lg:p-6 p-4 xs:p-0 sm:p-0 flex justify-center items-center">
      {/* making of the box or container */}
      <div className="w-[80%] lg:w-[80%] xs:w-full sm:w-full h-[90%] lg:h-[90%] xs:h-full sm:h-full bg-[#F6F6F8] rounded-[24px] lg:rounded-[24px] xs:rounded-none sm:rounded-none xs:flex-col sm:flex-col flex flex-row lg:flex-row md:overflow-y-scroll lg:overflow-hidden xs:overflow-y-scroll sm:overflow-y-scroll pb-0 lg:pb-0 sm:pb-4">
        {/* making of left column  */}
        <div className="w-[30%] lg:w-[30%] xs:w-full sm:w-full h-full bg-[#FFFFFF] pl-10 py-4 flex flex-col justify-between items-start gap-4">
          <Search getSearchData={getDataFromSearchBar} />
          <Primarydata mainData={wdata} clickName={clickName} />
          <Secondarydata mainData={wdata} />
        </div>
        {/* making of right column  */}
        <div className="w-[70%] lg:w-[70%] xs:w-full sm:w-full h-full bg-transparent flex flex-col justify-between items-stretch gap-5 p-4 lg:p-4 sm:p-2">
          {/* making of right coloumn header  */}
          <div className="w-full h-[60px] flex justify-between items-center px-4 pt-2 xs:mb-4 sm:mb-4">
            <h2 className="font-Popin text-2xl xs:text-xl sm:text-2xl font-[500]">
              Today&apos;s Highlights
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={celClick}
                className={`w-[40px] h-[40px] flex justify-center items-center font-Popin text-[18px] font-[500] shadow-[0_0_8px_#64646f10] ${
                  celbtnactive ? "bg-black text-white" : "bg-white text-black"
                } rounded-[50%]`}
              >
                °C
              </button>
              <button
                onClick={fahClick}
                className={`w-[40px] h-[40px] flex justify-center items-center font-Popin text-[18px] font-[500] shadow-[0_0_8px_#64646f10] ${
                  fahbtnactive ? "bg-black text-white" : "bg-white text-black"
                } rounded-[50%]`}
              >
                °F
              </button>
            </div>
          </div>
          {/* Card display  */}
          <div className="grid flex-1 w-full grid-cols-3 p-2 lg:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 xs:gap-6 sm:gap-8 place-items-center md:place-content-stretch">
            <UVindex mainData={wdata} />
            <WindStatus mainData={wdata} />
            <SunTime mainData={wdata} />
            <Humidity mainData={wdata} />
            <AirQuality mainData={wdata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
