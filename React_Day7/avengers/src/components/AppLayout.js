import { Outlet } from "react-router-dom";

import HeadingComponent from "./HeadingComponent";

export default function AppLayout() {
  return (
    <>
      <HeadingComponent />
      <Outlet />
    </>
  );
}
