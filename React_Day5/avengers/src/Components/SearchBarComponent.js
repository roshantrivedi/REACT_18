import { useState } from "react";

import data from "../data";

const searchAvengers = (searchText) => {
  return data.filter((team)=> team.name.toLowerCase().includes(searchText));
};

function SearchBarComponent({setAvengersData}) {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filteredAvengers = searchAvengers(searchText);
        //console.log(filteredAvengers);
        setAvengersData(filteredAvengers);
      }}
    >
      <input
        id="search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <h5>{searchText}</h5>
      <button>Search</button>
    </form>
  );
}

export default SearchBarComponent;

// REACT is a one-way binding thing.