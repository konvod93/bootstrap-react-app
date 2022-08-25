
import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from "./components/Navibar.js";
import {Home} from "./Home.js";
import {Users} from "./Users.js";
import {About} from "./About.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home/>} key="path" />
          <Route path="/users" element={<Users/>} key="path" />
          <Route path="/about" element={<About/>} key="path" />
        </Routes>        
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
