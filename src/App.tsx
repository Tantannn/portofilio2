import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';
import Footer from './Components/Footer';
import MoreProjects from './Pages/MoreProjects';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<MoreProjects/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
