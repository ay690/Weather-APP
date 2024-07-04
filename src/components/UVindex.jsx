/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ProgressBar from "react-customizable-progressbar";

const UVindex = ({ mainData }) => {
  const uv = mainData.uv;
  const progress = 8.33 * uv;
  

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">UV Index</span>
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
        <ProgressBar
          radius={70}
          progress={progress}
          strokeWidth={30}
          strokeColor="#ffce54"
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          cut={180}
          rotate={-180}
          className
        />
        <span className="text-[black] z-10 absolute top-[54%] font-Popin text-lg font-medium">
          {uv ? uv.toFixed(1) : uv}/12
        </span>
      </div>
    </div>
  );
};

export default UVindex;