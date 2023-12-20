import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { deletePhoto } from '../URL';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteUser() {
  const Navigate = useNavigate() 
  const [error,setError]= useState("")
  const [Data, setData] = useState([]);
  const closeButton=()=>{Navigate('/')}
  const queryClient = useQueryClient();
  const { id } = useParams();
  const mutation = useMutation(() => deletePhoto(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
    },
  });
//console.log(photoId,"iddd");
  const handleDelete = () => {
    mutation.mutate();
  }

  return (
  <> <div
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
          <Button onClick={handleDelete} variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
   <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   /></>  );
}

export default DeleteUser;
