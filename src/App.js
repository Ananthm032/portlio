
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Page/Home";
import Project from "./Page/Project";
import Experience from "./Page/Experience";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Experience" element={<Experience />} />
       </Routes>
       <Footer/>
      </Router></div>
  );
}

export default App;
