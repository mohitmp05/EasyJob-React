import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchUser } from "../redux/user/userSlice";
import EmployerPage from "./EmployerPage";
import Userpage from "./Userpage";

const Homepage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (props.data.length) {
      dispatch(fetchUser(props.data));
    }
  }, []);

  return (
    <div>
      {user.user.role === "USER" ? (
        <Userpage data={props.data} />
      ) : user.user.role === "EMPLOYER" ? (
        <EmployerPage data={props.data} />
      ) : (
        <h2>Not a valid user</h2>
      )}
    </div>
  );
};

export default Homepage;
