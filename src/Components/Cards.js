import { useState, useEffect } from "react";
import { Row, Image, Card } from "react-bootstrap";
import axios from "axios";
import { Data } from "../URL";
import { Button, NavDropdown } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
//theme
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
const Cards = (filteredData) => {
  const [data, setData] = useState([]);
  const theme = useContext(ThemeContext);
  const Navigate = useNavigate();
  const EditUser = () => {
    Navigate("/update");
  };
  const DeleteUser = () => {
    Navigate("/delete");
  };
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:3500/items", Data);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  console.log(Data, "data");
  console.log(filteredData, "uuuuuuuu");
  console.log(Data.length, "leeen");
  return (
    <>
      <Row
        className="b-solid-black "
        style={{ }}
      >
        {data.map((data) => (
          <Card
            key={data.id}
            style={{ margin: "6px", width: "300px", height: "300px" }}
          >
            <Card.Header style={{ backgroundColor: "blue", color: "white", padding:"5px"}}>
              <Card.Title>
                {" "}
                <Image
                  className="photo m-2 "
                  src={data.image_url}
                  style={{ height: "50px", width: "50px" }}
                  roundedCircle
                ></Image>
                {data.first_name} {data.last_name} {(data.is_verifed ==="false") ? "hhh":"j"}{" "}
                <NavDropdown>
                  <NavDropdown.Item
                    style={{
                      border: "white",
                      backgroundColor: "green",
                      color: "white",
                    }}
                    onClick={EditUser}
                  >
                    Edit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={DeleteUser}
                  >
                    Delete
                  </NavDropdown.Item>
                </NavDropdown>
                <div></div>
              </Card.Title>
              <Card.Text className="fs-6"> {data.email} </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {data.description.length < 200
                  ? data.description
                  : `${data.description.slice(0, 191)}...`}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};
export default Cards;
