
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/functionalComponents/Home';
import Login from './components/functionalComponents/Login';
import Navbar from './components/functionalComponents/Navbar';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<Home />}></Route>
      </Routes>{" "}
      </BrowserRouter>
  
      
   
  
        
      
  );
}

export default App;
