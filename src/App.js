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
  const [search, setSearch] = useState("");
  const [SearchFilter, setSearchfilter] = useState([]);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  //Authentication
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim() == "user" && password.trim() === "password") {
      setLoggedIn(true);
    } else {
      alert("Please  enter right user name");
    }
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  
 

  

  //theme
   
  return (
    <>
     
        {loggedIn ? (
          <>
            <div
              style={{ alignItems: "centre", justifyContent: "center" }}
              className="navbar navbar-expand bg-primary "
            >
              
            </div>{" "}
            <Container className="d-flex justify-content-center">
              {" "}
              
                
                
               
            </Container>
            <div className="navbar">
              <ul className="nav">
                <li className="nav-item"></li>
                <li className="nav-item"></li>
                <li className="nav-item"></li>
                <li className="nav-item"></li>
              </ul>
            </div>
            <div className="container mt-3">
              <Routes>
                <Route exact path="create" element={<AddUser />} />
                <Route exact path="/" element={<Cards></Cards>} />
                <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="tables" element={<Tables />} />
                <Route exact path="delete/id" element={<DeleteUser />} />
                <Route exact path="update/:id" element={<UpdateUser />} />
              </Routes>
              <Outlet />
            </div>
          </>
        ) : (
          <div
            
            className="background"
          >
            <div className="box">
              <form onSubmit={handleSubmit} className="form">
                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
                <Button
                  className="btn btn-outline-primary my-4 mx-5"
                  variant="outline-primary"
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
              </form>
            </div>
          </div>
        )}
      
    </>
  );
}

export default App;
