
import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About';
import Dash from '../components/Dash'
import { motion } from 'framer-motion';
import  { useEffect, useState } from "react";
const Home = () => {
 
  const [city, setcity] = useState("Mumbai");
  const [theme, setTheme] = useState("dark");
  return (
    <motion.div initial={{opacity:0,filter:" blur(4px)"}} animate={{opacity:1,filter:" blur(0px)"}} transition={{duration:0.5}} className={` ${theme==="dark"?"bg-white":"bg-black"} flex flex-col w-full h-fit items-center relative justify-center`}>
      <Navbar  theme={theme} setTheme={setTheme} setcity={setcity}></Navbar>
      <Dash theme={theme} city={city}></Dash>
      <About theme={theme}></About>
      
      
      
    </motion.div>
  )

}
export default Home
