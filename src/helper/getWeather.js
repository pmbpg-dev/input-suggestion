const API_KEY = "4d7ce8e480d57b10ab149e6ea9d693d4";
const getWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }
  const data = await res.json();
  return data;
};

export { getWeather };
