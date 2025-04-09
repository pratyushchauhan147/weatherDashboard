import React from "react";

const About = ({theme}) => {
  return (
    <footer className={`w-full ${theme==="dark"?"text-white  bg-zinc-900":"text-black bg-zinc-200"} py-6 mt-8 rounded-t-3xl`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* About Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Weather Forecast Dashboard for Zynetic </h2>
          <p className={`mt-1   ${theme==="dark"?"text-white  bg-zinc-900":"text-black bg-zinc-200"}`}>
           A simple Minimal Weather Dashboard made by Pratyush Chauhan , 
           This Page uses React + Vite as well as Tailwind css , added animations using Framer Motion 
          </p>
        </div>

        {/* Links or Credits */}
        <div className="text-sm text-gray-400">
           {new Date().getFullYear()} Pratyushchauhan147@gmail.com.
        </div>
      </div>
    </footer>
  );
};

export default About;
