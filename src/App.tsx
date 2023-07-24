import logo from './logo.svg';
import Navbar from './Component/Navbar/Navbar';
import NavItem from './Component/Navbar/NavItem/NavItem';
import DropdownMenu from './Component/Navbar/DropdownMenu/DropdownMenu';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon=':)'/>
        <NavItem icon=':)'/>
        <NavItem icon=':)'/>
        <NavItem>
          <DropdownMenu/>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
