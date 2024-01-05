import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import AlertBar from "./Components/AlertBar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="bg-[#ffffff]">
      <header>
        <AlertBar />
        <Navbar />
      </header>
      <Sidebar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
