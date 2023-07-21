import "./Navbar.css";
import './Navbar.css'

export default function Navbar(props: any) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
