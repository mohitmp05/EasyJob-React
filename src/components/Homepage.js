import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchUser } from "../redux/user/userSlice";

const Homepage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  useEffect(() => {
    if (props.data.length) {
      dispatch(fetchUser(props.data));
    }
  }, []);
  return (
    <div>
      Hello {user.user.username}
    </div>
  );
};

export default Homepage;
