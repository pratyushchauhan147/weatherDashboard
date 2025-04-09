import React, { useEffect, useState } from "react";
import axios from "axios";
import TodayForecast from "./TodayForecast";
import OtherDaysForcast from "./OtherDaysForcast";
const API_KEY = "5cd9191fb4d2119bd42be787e8901d87";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const DashTest = (props) => {
    const [city, setCity] = useState();
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);

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
        } catch (error) {
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
      
  return (
    <div>
        <TodayForecast forecast={forecast}></TodayForecast>
    </div>
  )
}

export default DashTest
