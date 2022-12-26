import { useState } from "react";

import useCities from "../customHook/useCities";
import stateObj from '../state-city.json';

const searchAvengers = (searchText, avengersData) => {
  return avengersData.filter((team)=> team.name?.toLowerCase().includes(searchText.toLowerCase()));
};

function SearchBarComponent({setAfterFilterData, avengersData}) {
  
  const [searchText, setSearchText] = useState("");
  const [selectedState, setSelectedState] = useState("Andaman and Nicobar Islands");
  const [selectedCity, setSelectedCity] = useState("");

  const onKeyUp = (e) => {
    e.preventDefault();
    const filteredAvengers = searchAvengers(searchText, avengersData);
    setAfterFilterData(filteredAvengers);
  }

  const handleChange = (e) =>{
    setSearchText(e.target.value);
  }

  const handleStateChange = (e) =>{
    setSelectedState(e.target.value);
  }

  const handleCityChange = (e) =>{
    setSelectedCity(e.target.value);
  }

  const cityList = useCities(selectedState);

  return (
    <div className="form">
      <input
        id="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
        onKeyUp={onKeyUp}
      />

      <h5>{searchText}</h5>

      <select value={selectedState} onChange={handleStateChange}>
          {Object.keys(stateObj).map((state) => (
          <option key={state} value={state}> {state} </option>
        ) )}
      </select>
            {" "}
      <select value={selectedCity} onChange={handleCityChange}>
          {cityList?.map((city) => (
          <option  value={city}> {city} </option>
        ) )}
      </select>
      {" "}
    </div>
  );
}

export default SearchBarComponent;