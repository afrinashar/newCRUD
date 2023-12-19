import AddUser from "./Components/Add";
import Cards from "./Components/Cards";
import Tables from "./Components/Tables";
import {
  BsListUl,
  BsFillPersonPlusFill,
  BsFillBrightnessHighFill,
  BsFillMoonFill,
  BsGrid3X3,
} from "react-icons/bs";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import DeleteUser from "./Components/Delete";
import UpdateUser from "./Components/Update";
import { useState, useEffect, useContext } from "react";
import Login from "./Components/login_component";
import SignUp from "./Components/signup_component";
import "./App.css";
//theme

import { ThemeContext, lightTheme, darkTheme } from "./ThemeContext";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
 

  

  //theme
   
  return (
    <>
     
         
          <>
            
              <Routes>
                <Route exact path="/create" element={<AddUser />} />
                <Route  exact path="/" element={isLoggedIn == "true" ? <Cards></Cards>:<Login />} />
                <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="/tables" element={<Tables />} />
                <Route exact path="/delete/id" element={<DeleteUser />} />
                <Route exact path="/update/:id" element={<UpdateUser />} />
              </Routes>
              <Outlet />
            
          </>
       
        
      
    </>
  );
}

export default App;
