import { Outlet } from "react-router-dom";
import Navigation from "../Nav/Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
