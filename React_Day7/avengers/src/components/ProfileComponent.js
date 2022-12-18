import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CardComponent from "./CardComponent";

const ProfileComponent = () => {
  const { id } = useParams();
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const d = await data.json();
    setProfileInfo(d);
  }

  return <CardComponent avenger={profileInfo} />;
};

export default ProfileComponent;
