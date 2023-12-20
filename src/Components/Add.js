import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { createPhoto } from '../URL';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreatePhoto = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(createPhoto, {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
 var notifySuccess = () => toast.success('Image created successfully');
     notifySuccess()
 navigate('/');
    },
    onError: (error) => {
     
        var notifyError = () => toast.error('Error creating image:', error.respose.data);
     notifyError()
    },
  });
   

  const [photoData, setPhotoData] = useState({
    imageUrl: '',
    firstName:'',
    lastName:'',
email:'' ,
  description: '',
    
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    mutation.mutate(photoData);
    console.log(photoData,(typeof(photoData.imageUrl.name)),(typeof(photoData.imageUrl)),"photooo");
  };

  const handleClose = () => {
    setPhotoData({
      imageUrl: '',
      firstName:'',
      lastName:'',
  email:'' ,
    description: ''
      
    });
    setShowModal(false);
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value} = e.target;
   // console.log((e.target),"name:",name,"value:",value,files); 
    setPhotoData((prevData) => ({
      ...prevData,
      [name]: value,


    }  
    ));
  };
const handleChangePhoto=(e)=>{
setPhotoData((prevData)=>({
  ...prevData,
  imageUrl:e.target.files[0]
  
}))
console.log((e.target.files[0].name),"file");
}
  return (<>
    <div>
    <Modal show={showModal} onHide={handleClose}>
      <div className="modal-header bg-primary">
        <h3 className="modal-title text-white m-3">Add Profile</h3>
        <button
          type="button"
          className="close rounded-circle p-2 bg-light "
          onClick={handleClose}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form onSubmit={handleCreate}>
        <Modal.Body>
        <div className="form-group">
            <label className='font-weight-bold' htmlFor="name"> <h6 className='font-weight-bold'>Image Url:</h6></label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              accept='image/png'
              //value={photoData.imageUrl}
              onChange={handleChangePhoto}
              required
            />
          </div>
          <div className="form-group">
            <label className='font-weight-bold' htmlFor="name"> <h6 className='font-weight-bold'>First Name:</h6></label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={photoData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"><h6 className='m-3'>Last Name:</h6></label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={photoData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"><h6 className='m-3'>Email:</h6></label>
            <input
              type="email"
              className="form-control"
              id="name"
              name="name"
              value={photoData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description"><h6 className='m-3'>Description:</h6></label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={photoData.description}
              onChange={handleChange}
            />
          </div>
          {/* You might want to handle the image separately based on your use case */}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            Add Celebrity
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
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
   /> </>);
};

export default CreatePhoto;