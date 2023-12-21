import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePhoto } from '../URL';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteUser = ({}) => {
  const [showModal, setShowModal] = useState(true);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate= useNavigate()
  const mutation = useMutation(() => deletePhoto(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
      console.log('Deleted successfully');
      setShowModal(false)
      notifySuccess()
      navigate('/');
      notifySuccess()
    },
  });
 var notifySuccess= () => toast.success(" successfully Deleted");
//console.log(photoId,"iddd");
  const handleDelete = () => {
    mutation.mutate( );
    
    notifySuccess()

  };
   var notifyError = () => toast.error("Delete Error");
  const handleClose = () => {
    //setShowModal(false); 

  
    navigate('/');
       notifyError()
  };
  return (
    <>
      
       <Modal show={showModal} onHide={handleClose}>
<div className="modal-header">
<h3 className='text- modal-title   '>DELETE photos</h3>
</div>
<div className="modal-body m-3 text-bold"> are you sure to delete </div>
<div className="modal-footer">
<button className='btn btn-success' onClick={handleDelete}>DELETE</button>
<button className="btn btn-danger" onClick={handleClose}>CLOSE</button>
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
   />
       </Modal>
       
    </>
  );
};

export default DeleteUser;