import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        handleshow(true);
      } else handleshow(false);
    });
  }, []);
  console.log(show)
  return (
    <div className="menu-container">
      <div className="menu-trigger">
        <div className="logo">
          <p>MT.</p>
        </div>
        <div
          className=" nav-icon"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className={`bar1 ${open && "bar1-inactive"}`}></div>
          <div className={`bar2 ${open && "bar2-inactive"}`}></div>
          <div className={`bar3 ${open && "bar3-inactive"}`}></div>
        </div>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <div className="dropdown-nav">
          <div className="dropdown-content">
            <ul>
              <DropdownItem text={"My Profile"} />
              <DropdownItem text={"Edit Profile"} />
              <DropdownItem text={"Inbox"} />
              <DropdownItem text={"Settings"} />
              <DropdownItem text={"Helps"} />
              <DropdownItem text={"Logout"} />
            </ul>
            <div>
              <h3>
                <span>Let’s find solutions together?</span>
              </h3>
              <p>
                Use my contacts below you need to put a project on the move, let’s
                work on it!
              </p>
              <p>
                <a>tango.11@yahoo.com</a>
              </p>
              <button className="btn custom-btn">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function DropdownItem(props: any) {
  return (
    <li className="dropdown-item">
      <img src={props.img} alt="Picture of the author"/>
      <a> {props.text} </a>
    </li>
  );
}
