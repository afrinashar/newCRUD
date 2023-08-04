import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';
import { Data } from "../URL";

function DeleteUser(id) {const Navigate = useNavigate() 
  const [error,setError]= useState("")
  const [Data, setData] = useState([]);
  const closeButton=()=>{Navigate('/')}
  const handleDelete = async () => {
    try {
     console.log('ffffffffffffffffffffffffffffffffffffffffffffffffffff', Data.id);
      await axios.delete(`http://localhost:3500/items/${id}`  );
      // If successful, update the state to remove the deleted item from the list
     setData((id) => Data.filter((item) => item.id !== id));
      
      
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Remove profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>are you sure to delete</p>
        </Modal.Body>

        <Modal.Footer key={Data.id} >
          <Button onClick={closeButton} variant="success">Close</Button>
          <Button onClick={()=>handleDelete(Data.id)} variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteUser;
