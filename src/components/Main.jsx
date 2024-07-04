/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Search, Primarydata } from "./index";

const Main = () => {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
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
          <Primarydata mainData={wdata} clickName={clickName}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
