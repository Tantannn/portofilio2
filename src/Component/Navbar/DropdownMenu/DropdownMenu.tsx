import React from "react";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = React.useState("main");
  const [menuHeight, setMenuHeight] = React.useState(100);
function calcHeight(el : any) {
  const height = el.offsetHeight;
    setMenuHeight(height);
}

  const DropdownItem = (props: any) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        unmountOnExit
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)" goToMenu="setting">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "setting"}
        timeout={300}
        unmountOnExit
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
          <DropdownItem leftIcon=":)" rightIcon=":)"></DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
