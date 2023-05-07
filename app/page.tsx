import React from "react";
import { CurrentWeather as CurrentWeatherType } from "./models/weather";
import CurrentWeatherComponent from "./components/CurrentWeather";

export default async function Home() {
  const dummyCurrentWeatherData: CurrentWeatherType = {
    city: "Oslo",
    country: "No",
    temperature: 30,
    description: "clear sky",
    icon: "01d",
  };

  return (
    <div>
      <CurrentWeatherComponent currentWeather={dummyCurrentWeatherData} />
    </div>
  );
}
