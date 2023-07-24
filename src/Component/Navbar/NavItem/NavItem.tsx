import { useState } from 'react';
import './NavItem.css'
export default function NavItem(props: any) {
  const [open, setopen] = useState(false)
  return (
    <>
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setopen(!open)}>
          {props.icon}
        </a>
      </li>
        {open && props.children}
    </>
  );
}
