import styles from "./Card.module.css";

function Card({ data: { weather } }) {
  return (
    <div className={styles.card}>
      <h2>{weather.name}</h2>
      <img
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      />
      <p>{weather.weather[0].main}</p>
      <h3>{Math.floor(weather.main.temp / 10)}℃</h3>
      <div>
        <p>Humidity {weather.main.humidity}%</p>
        <p>Wind speed {weather.wind.speed}m/s</p>
      </div>
    </div>
  );
}

export default Card;
