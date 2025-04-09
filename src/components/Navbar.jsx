import React, { useState } from "react";

const Navbar = ({ setcity,setTheme,theme }) => {
  const [search, setSearch] = useState("Mumbai");
  

  const handleSearch = () => {
    if (search.trim() !== "") {
      setcity(search.trim());
    }
  };



  return (
    <div className="sticky top-0 z-20 flex flex-col md:flex-row justify-center bg-transparent rounded-3xl backdrop-blur-sm h-[20vh] md:h-[12vh]">
      <div className={` ${theme==="dark"?"bg-zinc-200":"bg-zinc-900"}  navbar w-[90vw] h-[20vh]  md:h-[10vh] rounded-3xl p-3 m-2 flex flex-col md:flex-row justify-between  md:items-center shadow-md`}>
        
        
        <h1 className={`font-bold text-[2.5vh] ${theme==="light"?"text-white":"text-black"} `}>Weather Forecast</h1>

       
        <div className="flex  items-center gap-2 text-white">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Enter City"
            className={`h-[6vh] md:w-[30vw] md:min-w-[120px] text-center ${theme==="light"?"text-black bg-zinc-200 ":"text-white bg-zinc-900"}  rounded-2xl px-4 py-2 focus:outline-none`}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-xl text-white font-medium"
          >
            Go
          </button>
        </div>

       
        <div
          onClick={()=> {setTheme(theme ===  "dark" ? "light" : "dark")}}
          className="cursor-pointer text-white bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 w-2/6 md:w-1/12 rounded-2xl"
        >
          {theme === "dark" ? "Dark ☾" : "Light ☀"}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
