import { useState, useEffect } from "react";
import { getCity } from "./helper/getCity";
import Header from "./components/layouts/Header";
import MainPage from "./components/layouts/MainPage";

function App() {
  // ===============states====================
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  // ==================get cities================
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCity();
      setCities(data);
    };

    fetchData();
  }, []);
  // =======================jsx=================
  return (
    <div className="main">
      <Header cities={cities} setSelectedCity={setSelectedCity} />
      {selectedCity.length ? <MainPage selectedCity={selectedCity} /> : null}
    </div>
  );
}

export default App;
