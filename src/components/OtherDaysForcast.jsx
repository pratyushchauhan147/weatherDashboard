import React from "react";
import { motion } from "framer-motion";

const OtherDaysForecast = ({ groupedByDay }) => {
  const today = new Date().toISOString().split("T")[0];
  const entries = groupedByDay
    ? Object.entries(groupedByDay).filter(([date]) => date !== today)
    : [];

  const scrollHorizontally = (id, direction) => {
    const container = document.getElementById(id);
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
    initial={{scale:0}}
    animate={{scale:1}}
    
      layout
      className="flex flex-col gap-4 p-4 rounded-3xl bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-700 dark:to-blue-900  h-[76vh] overflow-y-scroll no-scrollbar"
    >
      {entries.map(([date, items], idx) => {
        const scrollId = `scrollable-${idx}`;
        return (
          <motion.div
          initial={{scale:0.4, x:"-100px"}}
            whileInView={{scale:1,x:"0px"}}
            layout
            key={date}
           
            className="relative bg-blue-100 dark:bg-blue-800 p-4 rounded-xl shadow-md"
          >
            <h2 className="text-md font-semibold mb-4 text-white">{date}</h2>

            <button
              onClick={() => scrollHorizontally(scrollId, "left")}
              className=" invisible md:visible backdrop-blur-sm absolute top-2/3 left-2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 z-10"
            >
              ←
            </button>
            <button
              onClick={() => scrollHorizontally(scrollId, "right")}
              className=" invisible md:visible absolute top-2/3 right-0 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 z-10"
            >
              →
            </button>

  
            <motion.div
            initial={{scale:0.4, y:"-50px"}}
            whileInView={{scale:1,y:"0px"}}
              id={scrollId}
              className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {items.map((entry) => (
                <motion.div
                initial={{scale:0.4, y:"-50px"}}
            whileInView={{scale:1,y:"0px"}}
            
                  key={entry.dt}
                  className="min-w-[150px]  flex flex-col flex-shrink-0 text-xs  items-center  text-white bg-white/10 dark:bg-white/5 p-3 rounded-md"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={`https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                      alt={entry.weather[0].description}
                      className="w-6 h-6"
                    />
                    <span>{entry.dt_txt.split(" ")[1].slice(0, 5)}</span>
                  </div>
                  <div className="text-center">
                    <div>{entry.main.temp.toFixed(1)}°C</div>
                    <div className="text-[10px] capitalize">
                      {entry.weather[0].description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default OtherDaysForecast;
