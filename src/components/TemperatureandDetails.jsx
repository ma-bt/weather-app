import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

function TemperatureandDetails() {
  return <div>
    <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p> Clear</p>
    </div>

    <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20" />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
            <div className="justify-center items-center flex font-light ">
                <UilTemperature size={18} className="mr-1" />
                Real Fell 
                <span className="font-medium ml-1">34°</span>
            </div>

            <div className="justify-center items-center flex font-light ">
                <UilTear size={18} className="mr-1" />
                Humidity 
                <span className="font-medium ml-1">65%</span>
            </div>

            <div className="justify-center items-center flex font-light ">
                <UilWind size={18} className="mr-1" />
                Wind 
                <span className="font-medium ml-1">11Kmph</span>
            </div>
            
        </div>
    </div>


    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-medium ml-1">Rise: <span>06:45 AM</span></p>
        <p className="font-light ">|</p>
        <UilSunset />
        <p className="font-medium ml-1">
            Set: <span>06:45 AM</span></p>
        <p className="font-light ">|</p>
        <UilSun />
        <p className="font-medium ml-1">High: <span>45</span></p>
        <p className="font-light ">|</p>
        <UilSun />
        <p className="font-medium ml-1">Low: <span>13</span></p>
        <p className="font-light ">|</p>
    </div>
  </div>;
}

export default TemperatureandDetails;
