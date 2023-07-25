import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p>helloc</p>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          hello
          <br />
          <span>Website Designer</span>
        </h3>
        <ul>
          <DropdownItem text={"My Profile"} />
          <DropdownItem text={"Edit Profile"} />
          <DropdownItem text={"Inbox"} />
          <DropdownItem text={"Settings"} />
          <DropdownItem text={"Helps"} />
          <DropdownItem text={"Logout"} />
        </ul>
      </div>
    </div>
  );
}
function DropdownItem(props: any) {
  return (
    <li className="dropdown-item">
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}
