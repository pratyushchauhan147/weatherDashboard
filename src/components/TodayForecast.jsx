import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const TodayForecast = ({ forecast }) => {
  const today = new Date().toISOString().split("T")[0];
  const todayItems = forecast?.list.filter(item => item.dt_txt.startsWith(today)) || [];
  const current = todayItems[0];

  return (
    <motion.div
    initial={{opacity:0 , x:"-100%"}}
    animate={{opacity:1 , x:"0"}}
    
    layout className=" bg-gradient-to-br from-green-300 to-green-500 dark:from-green-700 dark:to-green-900 p-6 rounded-2xl shadow-xl mb-6 md:h-[86vh]">
      <motion.h2
      initial={{opacity:0 , x:"100%"}} animate={{opacity:1 , x:"0"}} transition={{delay:0.1}}
      
      className="text-xl font-bold text-white mb-4">Today's Forecast</motion.h2>

      {current && (
        <motion.div  initial={{opacity:0 , y:"100%"}} animate={{opacity:1 , y:"0"}} transition={{delay:0.15}} className="flex items-center md:h-[30vh] flex-col justify-between bg-white/10 dark:bg-white/5 p-4 rounded-lg text-white mb-4">
          <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay:0.2}} className="flex md:gap-4 gap-2 items-center">
            <img
              src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              alt={current.weather[0].description}
              className="md:w-[7vw] md:h-[7vw] w-[40vw] h-[40vw] "
            />
            <div>
              <div className="text-lg font-bold">{forecast.city.name}</div>
              <div className="capitalize text-sm">{current.weather[0].description}</div>
            </div>
          </motion.div>
          <div className="text-center ">
            <div className="text-[4vh] font-bold">Temperature {current.main.temp.toFixed(1)}°C</div>
            <div className="text-[2vh]">Humidity: {current.main.humidity}%</div>
            <div className="text-[2vh]">Wind: {(current.wind.speed * 3.6).toFixed(1)} km/h</div>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {todayItems.map(entry => (
          <motion.div
          initial={{opacity:0 }} animate={{opacity:1 ,}} transition={{delay:0.4 , duration:0.3}}
          
          key={entry.dt} className="flex items-center justify-between bg-white/10 dark:bg-white/5 p-3 rounded-lg backdrop-blur-md text-white">
            <div className="flex items-center gap-3">
              <img
                src={`https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                alt={entry.weather[0].description}
                className="w-10 h-10"
              />
              <div>
                <div className="text-sm font-semibold">
                  {entry.dt_txt.split(" ")[1].slice(0, 5)}
                </div>
                <div className="text-xs capitalize">{entry.weather[0].description}</div>
              </div>
            </div>
            <div className="text-lg font-semibold">{entry.main.temp.toFixed(1)}°C</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TodayForecast
