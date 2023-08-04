import React from "react"
import axios from "axios"
import { useState } from "react"
import { Button, Row, Col, Form, Modal } from "react-bootstrap"
import {  Data} from "../URL"
import { useNavigate } from "react-router-dom"
import './Add.css'
const AddUser = () => {
  const [data, setData] = useState("")
  const [image_url, setimage_url] = useState("")
  const [first_name, setfirst_name] = useState("")
  const [last_name, setlast_name] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [is_verified, setis_verified] = useState("")
  const [showModal, setShow] = useState(true)
  
  // const handleShow () => {
  //   setShow(true);
  // };
  const Navigate = useNavigate()
  const handleClose = async () => {
    //id=Data.length?(Data[Data.length -1].id +1):1
    try {
      const response = await axios.post(Data,{
       // id,
        first_name,
        last_name,
        email,
        is_verified,
        image_url,
        description,
      });
     // setData(response.data)
      //console.log(response.data);
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
        <Modal show={showModal} key={data.id} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Profile</Modal.Title>
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
                      value={image_url}
                      onChange={(e) => setimage_url(e.target.value)}
                    /></div>
                </div>
                
                  <div className="addform">
                    <label id="fname">First Name {first_name}</label>
                    <input

                            id="fname"
                      type="text"
                      value={first_name}
                      onChange={(e) => setfirst_name(e.target.value)}
                    />
                 </div>
                 <div>
                  <div className="addform">
                    <label id="lastname" >Last Name</label>
                    <input 
                    id="lastname"
                      type="text"
                      value={last_name}
                      onChange={(e) => setlast_name(e.target.value)}
                    /></div>
                </div>
                <div className="addform">
                    
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </div><div className="addform">
                    <label>Description</label>
                    <textarea
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
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
                      checked={is_verified}
                     onChange={setis_verified(!is_verified)} ></input>
                  
          </div>
              </div>
            </Modal.Body>   

            <Modal.Footer>
              <Button type="button" variant="primary" onClick={handleClose}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
};
export default AddUser;
