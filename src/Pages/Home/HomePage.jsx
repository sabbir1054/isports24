import React from "react";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import UpComing from "./Components/UpComing/UpComing";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <UpComing/>
      This is home page
    </>
  );
};

export default HomePage;
