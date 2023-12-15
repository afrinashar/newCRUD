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
import axios from "axios";
import { Data } from "./URL";
import "./App.css";
//theme

import { ThemeContext, lightTheme, darkTheme } from "./ThemeContext";

function App() {
  const [search, setSearch] = useState("");
  const [SearchFilter, setSearchfilter] = useState([]);

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
  const Date = ["f", "r", "g"];
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/items",Data)
  //       .then((response) => setSearch(response.data),
  //       console.log(Data,"ffffffffffffffffffffffffffffffffff"))
  //       .catch((error) => console.log(error));

  //   }, []);

  //   const handleFilter = (event) => {
  //     setSearchfilter(event.target.value);
  //   };

  //   const filteredData = search.map((item) =>
  //     item.firstName.toLowerCase().includes(SearchFilter.toLowerCase()),
  //       console.log(search,"dddddddd")
  //   );

  useEffect(() => {
    const SearchFilter = Date.filter((data) =>
      (data.description ? data.description.toLowerCase() : "").includes(
        search.toLowerCase()
      )
    );
    setSearchfilter(SearchFilter.reverse());
  }, [search]);

  //theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <>
      <ThemeContext.Provider value={lightTheme}>
        {loggedIn ? (
          <>
            <div
              style={{ alignItems: "centre", justifyContent: "center" }}
              className="navbar navbar-expand bg-primary "
            >
              <h1 style={{ color: "white" }}>CRUD Operation</h1>
            </div>{" "}
            <Container className="d-flex justify-content-center">
              {" "}
              <Navbar
                bg="light"
                className="d-flex justify-content-center"
                variant="light"
              >
                <Navbar.Brand xl={10}>
                  {" "}
                  <input type="text" placeholder="Search" />
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to={"add"} className="nav-link">
                      {" "}
                      <Button className=" md-2" variant="outline-primary">
                        <BsFillPersonPlusFill /> Create Profile
                      </Button>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link className="btn-card" to={"/"}>
                      <BsListUl />
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="btn-table" to={"tables"}>
                      <BsGrid3X3 />
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar>
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
                <Route exact path="add" element={<AddUser />} />
                <Route exact path="/" element={<Cards></Cards>} />
                <Route exact path="tables" element={<Tables />} />
                <Route exact path="delete/id" element={<DeleteUser />} />
                <Route exact path="update/id" element={<UpdateUser />} />
              </Routes>
              <Outlet />
            </div>
          </>
        ) : (
          <div
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
            }}
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;
