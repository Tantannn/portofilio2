import React from "react";
import "./DropdownMenu.css";

export default function DropdownMenu() {
  const DropdownItem = (props: any) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
    </div>
  );
}
