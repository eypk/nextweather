"use client";

import React from "react";
import { CurrentWeather as CurrentWeatherType } from "../models/weather";

interface CurrentWeatherProps {
  currentWeather: CurrentWeatherType;
}

const CurrentWeatherComponent: React.FC<CurrentWeatherProps> = async ({
  currentWeather,
}) => {
  return (
    <div className="w-1/2 m-auto mt-6 flex items-center flex-col p-4 border rounded-lg shadow-md">
      <h3 className="text-lg mb-2">{currentWeather.city}</h3>
      <img
        className="mb-2"
        src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
        alt="forecast icon"
      />
      <h4 className="text-xl mb-1">
        {currentWeather.temperature} <sup>o</sup>C
      </h4>
      <p className="text-base text-gray-600 capitalize">
        {currentWeather.description}
      </p>
    </div>
  );
};

export default CurrentWeatherComponent;
