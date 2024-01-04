import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import AlertBar from "./Components/AlertBar";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <header>
        <AlertBar />
        {/* <Navbar /> */}
      </header>
      <Homepage />
    </>
  );
};

export default App;
