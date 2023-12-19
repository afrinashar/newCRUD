
// firstName,
// lastName,
// email,
// is_verified,
// imageUrl,
// description

import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { getPhotoById, updatePhoto } from '../URL'; // Assuming you have an API function to get and update a photo
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams()
  const { data: existingPhoto, isLoading: photoLoading } = useQuery(
    ['getPhoto', id],
    () => getPhotoById(id)
  );

  const mutation = useMutation(updatePhoto(id), {
    onSuccess: () => {
      console.log('Image updated successfully');
      setShowModal(false);
      navigate('/photos');
    },
    onError: (error) => {
      console.error('Error updating image:', error);
    },
  });

  const [photoData, setPhotoData] = useState({
    firstName: '',
lastName:'',
email:'',    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (existingPhoto) {
      setPhotoData({
        firstNameame: existingPhoto.firstName,
        lastName: existingPhoto.lastName,
        email:existingPhoto.email,
        description: existingPhoto.description,
        // You might want to handle the image separately depending on your use case
      });
    }
  }, [existingPhoto]);

  const handleUpdate = (e) => {
    e.preventDefault();
    mutation.mutate({ id, data: id });
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };
  console.log(photoData,"ext",id);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPhotoData((prevData) => ({
      ...prevData,
      [name]: name === 'imageUrl' ? files[0] : value,
    }));
  };

  if (photoLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <div className="modal-header bg-primary">
          <h3 className="modal-title text-white m-3">Edit Profile</h3>
          <button
            type="button"
            className="close rounded-circle p-2 bg-light "
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={handleUpdate}>
          <Modal.Body>
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
              Update Image
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateUser;