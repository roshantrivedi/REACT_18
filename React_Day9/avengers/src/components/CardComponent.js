import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../App.css";
import { addItem } from "../redux/cartSlice.js";
import ThemeContext from "../context/ThemeContext";

const CardComponent = ({ avenger }) => {
  const { theme } = useContext(ThemeContext);

  const { login, avatar_url, name, location, bio, company } = avenger;

  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(addItem());
  }

  return (
    <div
      id="card"
      className="card-component"
      style={{ backgroundColor: theme === "light" ? "#222a68" : "#000" }}
    >
      <img src={avatar_url} alt="profile-pic"></img>
      <Link to={`/profile/${login}`}>
        <h5>{name}</h5>
      </Link>
      <h6>Location: {location || "India"}</h6>
      <h6>Bio: {bio || "Developer"}</h6>
      <h6>Company: {company || "NA"}</h6>
      <button onClick={addItems}>Add Item</button>
    </div>
  );
};

export default CardComponent;
