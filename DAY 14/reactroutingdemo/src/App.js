
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './home';
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
     <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;
