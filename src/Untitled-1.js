import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { API_URL } from "../URL";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShow] = useState(true);
  // const handleShow () => {
  //   setShow(true);
  // };
  const Navigate = useNavigate();
  const handleClose = async (e) => {
    const res = await axios.post(
      API_URL,
      firstName,
      lastName,
      description,
      email
    );
    console.log(
      "Correct Header Status:",
      res.data.data.getAllProfiles.profiles
    );
    //console.log( "name");
    // setShow(false)
    Navigate("/cards");
    e.preventDefault();
  };
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Profile</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Row>
                <Col lg={12} sm={4}>
                  <Form.Group className="mb-3 xs-12">
                    <label>Enter Link </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    ></input>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3 md-6"
                    controlId="exampleinputInput1"
                  >
                    <label>First Name {firstName}</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} md={12}>
                  <Form.Group className="mb-3 " controlId="exampleinputInput1">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group
                    className="mb-3 lg-12"
                    controlId="exampleinputInput1"
                  >
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </Form.Group>
                </Col>
                <Col lg={12} sm={4}>
                  <Form.Group
                    className="mb-3 xl-12"
                    controlId="exampleinputTextarea1"
                  >
                    <label>Description</label>
                    <input
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="write a description for a talent"
                    />
                  </Form.Group>
                </Col>
                <Col lg={12} sm={4}>
                  <div
                    style={{ backgroundColor: "secondary" }}
                    className="form-check form-switch d-flex  p-1 justify-content-end"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      //checked
                    ></input>
                  </div>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer>
              <Button type="submit" variant="primary" onClick={handleClose}>
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
