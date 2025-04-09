import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import TodayForecast from "./TodayForecast";
import OtherDaysForcast from "./OtherDaysForcast";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_URL;


const Dash = (props) => {
 
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, seterror] = useState();

  const updateHistory = (cityName) => {
      setHistory((prev) => {
        const updated = [cityName, ...prev.filter((c) => c !== cityName)].slice(0, 5);
        localStorage.setItem("weatherHistory", JSON.stringify(updated));
        return updated;
      });
    };
  
    useEffect(() => {
      const saved = localStorage.getItem("weatherHistory");
      if (saved) setHistory(JSON.parse(saved));
    }, []);
  

  useEffect(() => {
      if (props.city) {
        fetchForecast(props.city);
      }
    }, [props.city]);
  
    const fetchForecast = async (cityName) => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
        setForecast(res.data);
        setCity(cityName);
        updateHistory(cityName)
      } catch (error) {
        console.log(error)
       alert("City not found");
      }
      setLoading(false);
    };
    const groupedByDay = forecast?.list.reduce((acc, item) => {
      const date = item.dt_txt.split(" ")[0];
      acc[date] = acc[date] || [];
      acc[date].push(item);
      return acc;
    }, {});
    
  return loading?(<><section className='h-[90vh] flex justify-center items-center'>
    <motion.div inital={{scale:0}}
          animate={{scale:1}}
          transition={{type:"spring"}}
    
     className=" flex justify-center items-center rounded-3xl w-[40vw] h-[40vh]">
       <h1 className="text-[4vw]">Loading</h1>
    </motion.div>

    
    </section> </>): (
    <div>
      <section  className=' flex flex-col md:flex-row gap-2  items-center justify-center rounded-3xl'>
      <div className=" scrollbar-hide  overflow-x-scroll w-[100vw] noS  md:hidden recent mb-1 flex gap-2 flex-row rounded-3xl p-2 ">
           
           {history.map((item) => (
             <button key={item} onClick={() => fetchForecast(item)} className={` px-3 py-1 ${props.theme==="light"?"text-white bg-zinc-800":"text-black bg-zinc-200"}  hover:bg-gray-400  rounded-2xl h-[4vh]`}>
               {item}
             </button>
           ))}
             </div>
        <div className="left  pt-4 gap-2  w-[90vw]  md:w-[40vw]  rounded-3xl">
        <TodayForecast forecast={forecast}></TodayForecast>
        </div>
        <div className="right gap-2 w-[90vw] md:w-[50vw]  flex flex-col rounded-3xl">
            <div className="recent mb-1 gap-2 flex-row rounded-3xl p-2  hidden md:flex  ">
           
          {history.map((item) => (
            <button key={item} onClick={() => fetchForecast(item)} className={` px-3 py-1 ${props.theme==="light"?"text-white bg-zinc-800":"text-black bg-zinc-200"}  hover:bg-gray-400  rounded-2xl h-[4vh]`}>
              {item}
            </button>
          ))}
            </div>
            <div className="recent rounded-3xl ">
            <OtherDaysForcast groupedByDay={groupedByDay} />

            </div>
        </div>

        </section>
      
    </div>
  )
}

export default Dash
