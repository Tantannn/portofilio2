import "./Navbar.css";

export default function Navbar(props: any) {
  return (
    <nav id="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
