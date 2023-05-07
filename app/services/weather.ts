import { CurrentWeather, Forecast } from "../models/weather";

const baseURL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (
  city: string
): Promise<{
  // currentWeather: CurrentWeather;

  forecast: Forecast[];
}> => {
  //currentWeather
  // const currentWeatherResponse = await fetch(
  //   `${baseURL}/weather?q=${city}&units=metric&appid=${apiKey}`
  // );
  // const currentWeatherData = await currentWeatherResponse.json();

  // if (currentWeatherData.cod !== "200") {
  //   throw new Error(currentWeatherData.message);
  // }

  // console.log(currentWeatherData);

  //forecast
  const forecastResponse = await fetch(
    `${baseURL}/forecast?q=${city}&units=metric&appid=${process.env.APIKEY}`
  );
  const forecastData = await forecastResponse.json();

  console.log(forecastData);

  if (forecastData.cod !== "200") {
    throw new Error(forecastData.message);
  }

  // const currentWeather: CurrentWeather = {
  //   city: currentWeatherData.name,
  //   country: currentWeatherData.sys.country,
  //   temperature: currentWeatherData.main.temp,
  //   description: currentWeatherData.weather[0].description,
  //   icon: currentWeatherData.weather[0].icon,
  // };

  const forecast: Forecast[] = forecastData.list
    .filter((item: any, index: number) => index % 8 === 0)
    // .slice(0, 4)
    .map((item: any) => ({
      date: new Date(item.dt_txt),
      temperature: item.main.temp,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
    }));

  return { forecast };
};

export const fetchCurrentData = async (
  city: string
): Promise<{
  currentWeather: CurrentWeather;
}> => {
  const currentWeatherResponse = await fetch(
    `${baseURL}/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const currentWeatherData = await currentWeatherResponse.json();

  if (currentWeatherData.cod !== "200") {
    throw new Error(currentWeatherData.message);
  }

  console.log(currentWeatherData);

  const currentWeather: CurrentWeather = {
    city: currentWeatherData.name,
    country: currentWeatherData.sys.country,
    temperature: currentWeatherData.main.temp,
    description: currentWeatherData.weather[0].description,
    icon: currentWeatherData.weather[0].icon,
  };

  return { currentWeather };
};
