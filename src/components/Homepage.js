import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchUser } from "../redux/user/userSlice";
import HomepageNavbar from "./HomepageNavbar";

const Homepage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")).length == 0) {
      dispatch(fetchUser(JSON.parse(localStorage.getItem("jwt"))));
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <div>
      <HomepageNavbar />
      Homepage {user.username}
    </div>
  );
};

export default Homepage;
