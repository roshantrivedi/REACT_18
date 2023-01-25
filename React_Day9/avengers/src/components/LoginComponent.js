import { useDispatch } from "react-redux";
import { loginfn } from "../redux/loginSlice.js";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../App.css";

const LoginComponent = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    dispatch(
      loginfn({userName,password})
    );
    navigate("landing-page");
  };

  return (
    <>
      <h2>Login</h2>
      <p>Please enter your username and password!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
          required
        />{" "}
        <label>Username</label>
        <br />
        <input
          type="password"
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <label>Password</label>
        <button>Login</button>
        <br />
      </form>
    </>
  );
};

export default LoginComponent;
