import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingNavbar from "./components/LandingNavbar";
import Home from "./components/Home";
import HomepageNavbar from "./components/HomepageNavbar";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  const [nav, setNav] = useState(<LandingNavbar />);
  useEffect(() => {
    if (user.isLogged) {
      setNav(<HomepageNavbar />);
    }
    else{
      setNav(<LandingNavbar/>)
    }
  }, [user.isLogged]);
  console.log(user.isLogged);
  return (
    <div>
      {/* {user.isLogged?<HomepageNavbar/>:<LandingNavbar/>} */}
      {nav}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
