import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header({ cities, setSelectedCity }) {
  // ================states========================
  const [text, setText] = useState("");
  const [city, setCity] = useState([]);
  const [isShowList, setIsShowList] = useState(false);

  // =================find cities===================
  useEffect(() => {
    const findCity = cities.filter((city) => city.startsWith(text));
    setCity(findCity);
    if (text === "") {
      setCity([]);
      setIsShowList(false);
    }
  }, [text]);

  // ===============events===========================
  // ---------------input event--------------------
  const changeHandler = (e) => {
    const { value } = e.target;
    // .........upperCase first character........
    if (value.length === 1) {
      setText(value.toUpperCase());
    } else {
      setText(value);
    }
    setIsShowList(true);
  };
  // ---------------li event--------------------
  const setCityInputHandler = (e) => {
    setIsShowList(false);
    setText(e.target.innerText);
  };
  // ----------get weather btn event--------------
  const getWeatherHandler = () => {
    setIsShowList(false);
    setSelectedCity(text);
  };

  // ====================jsx======================
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="input">{city[0]}</label>
        <input
          type="text"
          id="input"
          onChange={changeHandler}
          value={text}
          placeholder={`City name:${
            cities[Math.floor(Math.random() * cities.length)]
          }`}
        />

        {isShowList && city.length ? (
          <ul>
            {city.map((c) => (
              <li key={c} onClick={setCityInputHandler}>
                {c}
              </li>
            ))}
          </ul>
        ) : null}

        {text && <button onClick={() => setText("")}>Clear</button>}
      </div>
      <button className={styles.getBtn} onClick={getWeatherHandler}>
        Get Weather
      </button>
    </div>
  );
}

export default Header;
