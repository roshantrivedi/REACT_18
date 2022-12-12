import { useState } from "react";

const searchAvengers = (searchText, avengersData) => {
  return avengersData.filter((team)=> team.name?.toLowerCase().includes(searchText.toLowerCase()));
};

function SearchBarComponent({setAfterFilterData, avengersData}) {
  
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredAvengers = searchAvengers(searchText, avengersData);
    setAfterFilterData(filteredAvengers);
  }

  const handleChange = (e) =>{
    setSearchText(e.target.value);
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        id="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
      <h5>{searchText}</h5>
      <button>Search</button>
    </form>
  );
}

export default SearchBarComponent;