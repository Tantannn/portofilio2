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
        <div className={ `${!show? 'logo' : 'logo-black' }` }>
          <p>MT.</p>
        </div>
        <div
          className=" nav-icon"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className={`${!show? 'bar1' : 'bar1-black' } ${open && "bar1-inactive"}`}></div>
          <div className={`${!show? 'bar2' : 'bar2-black' } ${open && "bar2-inactive"}`}></div>
          <div className={`${!show? 'bar3' : 'bar3-black' } ${open && "bar3-inactive"}`}></div>
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
      <a> {props.text} </a>
    </li>
  );
}
