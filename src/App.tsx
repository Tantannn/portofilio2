import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import NavItem from './Component/NavItem/NavItem';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon=':)'/>
        <NavItem icon=':)'/>
        <NavItem icon=':)'/>
      </Navbar>
    </div>
  );
}

export default App;
