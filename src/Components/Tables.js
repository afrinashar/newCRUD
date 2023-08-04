import { Button, NavDropdown, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BsThreeDotsVertical,
  BsPatchCheckFill,
  BsFillGearFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../URL";
import DeleteUser from "./Delete";

//import AddUser from './Components/Add'   c
const Cards = () => {
  const Navigate = useNavigate();
  const EditUser = () => {
    Navigate("/update");
  };
  const DeleteUser = () => {
    Navigate("/delete");
  };
  const [data, setData] = useState([]);

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
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr style={{ backgroundColor: "blue",color:"white" }}>
            <td>Name</td>
            <td>Email</td>
            <td>Description</td>
            <td>
              <BsFillGearFill style={{color:"white"}} />
            </td>
          </tr>
        </thead>
        <tbody  style={{backgroundColor:"ButtonShadow"}}>
          {data.map((data) => (
            <tr key={data.id}>
              {" "}
              <td>
                {data.first_name} {data.last_name} {data.is_verifed}
              </td>
      
              <td>{data.email}</td>
              <td>{data.description}</td>
              <td>
                <div>
                  <NavDropdown>
                    <NavDropdown.Item style={{ border:"white" ,backgroundColor:"green",color:"white"}} onClick={EditUser}>Edit</NavDropdown.Item>
                    <NavDropdown.Item style={{backgroundColor:"red",color:"white"}} onClick={DeleteUser}>
                      Delete
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button></Button>uygyu
    </>
  );
};
export default Cards;
