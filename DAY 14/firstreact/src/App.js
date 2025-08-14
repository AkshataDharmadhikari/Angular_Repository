import './components/home';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <h1> Welcome to the world React </h1>
    <h3> Addition of my fav numbers are { 10 + 20 }</h3>
    <h3> Tomorrow is { new Date().toDateString()} </h3>
    <h3> we have training tomorrow ? { 15 < 10 ? "yes" : "No"}</h3>  
    <Home></Home>
    </div>
    
  );
}

export default App;
