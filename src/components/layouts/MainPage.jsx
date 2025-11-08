import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { getWeather } from "../../helper/getWeather";
import Card from "../module/Card";

function MainPage({ selectedCity }) {
  // =================states=======================
  const [data, setData] = useState({
    weather: {},
    loading: true,
    error: false,
  });
  // =================get api city weather=============
  useEffect(() => {
    setData({
      weather: {},
      loading: true,
      error: false,
    });
    const fetchWeather = async () => {
      try {
        const getData = await getWeather(selectedCity);
        setData({
          weather: getData,
          loading: false,
          error: false,
        });
      } catch (err) {
        setData({
          weather: {},
          loading: false,
          error: true,
        });
      }
    };
    fetchWeather();
  }, [selectedCity]);

  // ==================jsx=====================
  return (
    <div className={styles.container}>
      {data.loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : data.error ? (
        <h2>Error to Fetch data</h2>
      ) : (
        <Card data={data} />
      )}
    </div>
  );
}

export default MainPage;
