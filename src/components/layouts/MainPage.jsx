import { useEffect, useState } from "react";
import { getWeather } from "../../helper/getWeather";
import { Circles } from "react-loader-spinner";
import Card from "../module/Card";
import styles from "./MainPage.module.css";

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
          <Circles
            height="80"
            width="80"
            color="#fff"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
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
