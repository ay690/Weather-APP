/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiSearch } from "react-icons/ci";

const Search = ({ getSearchData }) => {
  return (
    <div className="flex items-center justify-start w-full h-8 gap-3 py-2">
      <CiSearch className="text-2xl  text[#606060]" />
      <input
        placeholder="Enter your city...."
        type="text"
        onChange={(e) => getSearchData(e.target.value)}
        onClick={(e) => getSearchData(e.target.value)}
        className="text-sm border-none outline-none font-Popin placeholder:font-Popin placeholder:font-normal placeholder:text[#606060] bg-transparent"
      />
    </div>
  );
};

export default Search;
