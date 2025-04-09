import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Dash from "../components/Dash";

const Test = () => {
  const [city, setcity] = useState("Mumbai");
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`${
        theme === "dark" ? "bg-white" : "bg-black"
      } flex flex-col w-full min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24`}
    >
      <Navbar theme={theme} setTheme={setTheme} setcity={setcity} />

      <div className="w-full max-w-screen-xl">
        <Dash theme={theme} city={city} />
      </div>

      <div className="w-full max-w-screen-xl">
        <About theme={theme} />
      </div>
    </div>
  );
};

export default Test;
