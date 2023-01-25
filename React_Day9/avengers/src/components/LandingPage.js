import { useSelector, useDispatch } from "react-redux";

import { logoutfn } from "../redux/loginSlice"; 

const LandingPage = () => {

  const details = useSelector( (store) => store.login.value);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logoutfn());
  }

  return (
    <>
      <span>Welcome user {details.userName}!!!</span>
      <button onClick={handleLogout} type='submit'>Logout</button>
    </>
  )
}

export default LandingPage;