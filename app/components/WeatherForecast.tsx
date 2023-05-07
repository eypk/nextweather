/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Forecast } from "../models/weather";

interface WeatherForecastProps {
  forecast: Forecast[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <div className=" m-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {forecast.map((day, index) => {
        return (
          <div
            key={index}
            className="flex items-center flex-col p-4 border rounded-lg shadow-md"
          >
            <h3 className="text-lg mb-2">
              {new Date(day.date).toLocaleDateString()}
            </h3>
            <img
              className="mb-2"
              src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="forecast icon"
            />
            <h4 className="text-xl mb-1">
              {day.temperature}
              <span>
                <sup>o</sup>C
              </span>
            </h4>
            <p className="text-base text-gray-600 capitalize">
              {day.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;
