import { useState, useEffect } from "react";
import { Row, Image, Card } from "react-bootstrap";
import { getPhotos } from "../URL";
import { Button, NavDropdown } from "react-bootstrap";
import { useQuery } from 'react-query';
import Spinner from './spinner'
import { useNavigate } from "react-router-dom";
//theme
// import React, { useContext } from "react";
// import { ThemeContext } from "../ThemeContext";
const Cards = (filteredData) => {
  //const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //const theme = useContext(ThemeContext);
  const Navigate = useNavigate();
  const EditUser = () => {
    Navigate("/update");
  };
  const DeleteUser = () => {
    Navigate("/delete");
  };

  
  // const [edit, setEdit] = useState("");
   const [show, setShow] = useState(false);
    const { data: photos, isLoading, isError,isFetching } = useQuery(['photos', searchTerm], () => getPhotos(searchTerm), {staleTime:3000});

  if (isLoading || isFetching) {
    return <><Spinner></Spinner></>
  }

  if (isError) {
    return <div>Error fetching photos</div>;
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //const handleClose = () => setShow(false);
  // Filter photos based on the search term
  const filteredPhotos = photos.filter((photo) =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get("http://16.171.239.100:3003/photos", Data);
  //       setData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getData();
  // }, []);
  // console.log(Data, "data");
  // console.log(filteredData, "uuuuuuuu");
  // console.log(Data.length, "leeen");
  return (
    <>
      <Row className="b-solid-black " style={{}}>
        {filteredPhotos.map((data) => (
          <Card
            key={data.id}
            style={{ margin: "6px", width: "300px", height: "300px" }}
          >
            <Card.Header
              style={{
                backgroundColor: "indigo-500",
                color: "white",
                padding: "5px",
              }}
            >
              <Card.Title>
                {" "}
                <Image
                  className="photo m-2 "
                  src={data.imageUrl}
                  style={{ height: "50px", width: "50px" }}
                  roundedCircle
                ></Image>
                {data.firstName} {data.lastName}{" "}
                {data.isVerifed === "false" ? "hhh" : "j"}{" "}
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
