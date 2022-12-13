import { Link } from "react-router-dom";

const CardComponent = ({ avenger }) => {
  const { login, avatar_url, name, location, bio, company } = avenger;
  return (
    <div id="card" className="card-component">

      <img src={avatar_url} alt="profile-pic"></img>
      <Link to={`/profile/${login}`}>
        <h5>{name}</h5>
      </Link>
      <h6>Location: {location}</h6>
      <h6>Bio: {bio}</h6>
      <h6>Company: {company}</h6>

    </div>
  );
};

export default CardComponent;