import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/functionalComponents/Home';
import Login from './components/functionalComponents/Login';
import Navbar from './components/functionalComponents/Navbar';

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      
     
      <Routes>
       
        <Route path="/" element={<Login />} />
       
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
