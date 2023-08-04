import React from "react"
import axios from "axios"
import { useState } from "react"
import { Button, Row, Col, Form, Modal } from "react-bootstrap"
import {Data} from "../URL"
import { useNavigate } from "react-router-dom"
import './Add.css'
const UpdateUser = ( id,
  first_name,
  last_name,
  email,
  is_verified,
  image_url,
  description,  ) => {
  // const [data, setData] = useState("")
  // const [error, setError] = useState("")
  // const [image_url, setimage_url] = useState("")
  // const [first_name, setfirst_name] = useState("")
  // const [last_name, setlast_name] = useState("")
  // const [email, setEmail] = useState("")
  // const [description, setDescription] = useState("")
  // const [is_verified, setis_verified] = useState("")
  const [showModal, setShow] = useState(true)
  
  // const handleShow () => {
  //   setShow(true);
  // };
  const [data, setData] = useState( id="",
    first_name,
    last_name,
    email,
    is_verified,
    image_url,
    description)
  const Navigate = useNavigate()
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleClose = async (id) => {

    try {
      await axios.put(`http://localhost:3500/items/${id}`,Data );
      console.log('Data updated successfully');
    setData(handleClose.data)
  } catch (error) {
      console.error(error);
    }
   
    Navigate('/')
  }
  return (
    <>
  <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Profile</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <div className="add-addform">
              <div>
                  <div className="addform">
                    <label id="lastname" >url</label>
                    <input 
                    id="urlname"
                      type="text"
                      value={data.image_url}
                      onChange={handleChange}
                    /></div>
                </div>
                
                  <div className="addform">
                    <label id="fname">First Name </label>
                    <input

                            id="fname"
                      type="text"
                      value={data.first_name}
                      onChange={handleChange}
                    />
                 </div>
                 <div>
                  <div className="addform">
                    <label id="lastname" >Last Name</label>
                    <input 
                    id="lastname"
                      type="text"
                      value={data.last_name}
                      onChange={handleChange}
                    /></div>
                </div>
                <div className="addform">
                    
                    <label>Email</label>
                    <input
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                    />
                  </div><div className="addform">
                    <label>Description</label>
                    <textarea
                      as="textarea"
                      value={data.description}
                      onChange={handleChange}
                      placeholder="write a description for a talent"
                      
                    /></div>
                  
                  <div
                    style={{ backgroundColor: "#e3e3e3" }}
                    className="form-check form-switch d-flex  p-1 justify-content-end"
                  >
                    <label className="verify"> Talent is Verified</label>
                   
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      onChange={data.is_verified}
                    ></input>
                  
          </div>
              </div>
            </Modal.Body>   

            <Modal.Footer>
              <Button type="button" variant="primary" onClick={()=>handleClose(Data.id)}>
              Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div> 
      
    </>
  );
};
export default UpdateUser;
