import { useState, useEffect } from "react";

import stateMap from "../state-city.json";

const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const data = stateMap[state];
      setCities(data);
    }
  },[state]);
  
  return cities;
};

export default useCities;
