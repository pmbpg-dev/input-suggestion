const getCity = async () => {
  try {
    const res = await fetch("/data/cities.json");
    const data = res.json();
    return data;
  } catch (err) {
    console.error("fetch error:", err);
  }
};

export { getCity };
