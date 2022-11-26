import { useState } from "react";
import { json, useNavigate } from "react-router";
import { Menu } from "semantic-ui-react";
import logo from "../images/easyjob-logo.png";

function HomepageNavbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const handleLogout = (e, { name }) => {
    setActiveItem(name);
    localStorage.setItem("jwt", JSON.stringify(""));
    localStorage.setItem("user", JSON.stringify(""));
    navigate("/");
  };
  return (
    <Menu secondary style={{ backgroundColor: "#6C63FF" }}>
      <Menu.Item>
        <img src={logo} alt="logo" style={{ width: "25%", height: "25%" }} />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="Dashboard"
          active={activeItem === "Dashboard"}
          onClick={handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="Profile"
          active={activeItem === "Manage Jobs"}
          onClick={handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={handleLogout}
          style={{ color: "white" }}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default HomepageNavbar;
