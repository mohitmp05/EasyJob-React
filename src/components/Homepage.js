import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Tab,
  Grid,
  Segment,
  Icon,
  Header,
  Image,
  Menu,
  MenuItem,
  HeaderSubheader,
} from "semantic-ui-react";
import { fetchUser } from "../redux/user/userSlice";
import EmployerPage from "./EmployerPage";
import HomepageNavbar from "./HomepageNavbar";
import Jobs from "./Jobs";
import LandingNavbar from "./LandingNavbar";
import PersonalInfo from "./PersonalInfo";
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
  
  return(
    <div>
          {user.user.role==="USER"?<Userpage data={props.data}/>:<EmployerPage data={props.data}/>}
    </div>
  )
}

export default Homepage;
