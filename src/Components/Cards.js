import React, { useState,useRef } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPhotos } from '../URL';
//import PhotoDetails from './PhotoDetails';
import {
  BsListUl,
  BsThreeDotsVertical,
  BsGrid3X3,
} from "react-icons/bs";
import Spinner from '../Components/spinner';
import {Button,Card, Modal,Form,Row,Col,Container,DropdownButton,Dropdown,Image} from 'react-bootstrap';
//import DeletePhoto from './DeletePhoto';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useEffect } from 'react';
 
const PhotoList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [edit, setEdit] = useState("");
  const [show, setShow] = useState(false);
  const { data: photos, isLoading, isError,isFetching } = useQuery(['photos', searchTerm], () => getPhotos(searchTerm), {staleTime:3000});
const celeb = useRef();

  if (isLoading || isFetching) {
    return <><Spinner></Spinner></>
  }
 
  if (isError) {
    return <div>Error fetching photos</div>;
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(photos,"data");
  const handleClose = () => setShow(false);
  // Filter photos based on the search term
  const filteredPhotos = photos.filter((photo) =>
    photo.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  var handleItemClick = (photo) => {
    setEdit(photo)
   //  const{(edit) }= edit
 
  setShow(true)
  };
// console.log( edit,(edit.name),"id")
  // Sorting logic
  // const sortedPhotos = [...filteredPhotos].sort((a, b) => {
  //   const order = sortOrder === 'asc' ? 1 : -1;
  //   return order * a.name.localeCompare(b.name);
  // });
  const handleDownload = (imageUrl, title) => {
      // Create a link element
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `${title}.jpg`;
      document.body.appendChild(link);
  
      // Trigger the click event to start the download
      link.click();
  
      // Clean up the link element
      document.body.removeChild(link);
    };
  return (<>
    <div>
      
      

      {/* Search bar */}
     
<nav className="navbar   top-0 navbar-light sticky-top bg-primary"  >
  <div className="container-fluid bg-primary top-0  sticky-top">
   
    <Link to="create" className='btn btn-outline-light  '>Add </Link>
    <Link className="btn btn-outline-light float-start  float-left m-0" data-bs-toggle="tooltip" data-bs-html="true" title="CARD " to={"/"}>
                      <BsListUl />
                    </Link>
                  
                 
                    <Link className="btn btn-outline-light" data-bs-toggle="tooltip" data-bs-html="true" title=" TABLE " to={"tables"}>
                    <BsGrid3X3 className='' />
                    </Link>
                    <h1 className='text-white'>Celebrities Gallery</h1>
    <form className="d-flex input-group w-auto">
    <input
   
     className="form-control   rounded"
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={handleSearch}
        ref={celeb}
      />
      
    </form>
  </div>
</nav>
      <div className="row p-5">
        {filteredPhotos.map((photo) => (
          <div className='col-lg-4  mh-50 col-sm-12      ' key={photo._id}>
            <Link  className='Link' data-bs-toggle="tooltip" data-bs-html="true" title={photo.description} onClick={() => handleItemClick(photo)}  >
              <div className='card mh-30 p-3   shadow p-3 mb-5 bg-body rounded'>
                <img src={photo.imageUrl} alt={photo.title} className="mw-100 hover hover-shadow   border-dark ml-1 shadow-1-strong rounded mb-4" />
                <div className='card-title '><h2 className='text-decoration-none'>{photo.firstName} {photo.lastName}</h2>{photo.size} {photo.lastModifiedDate}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    
    {/* <a href="mailto:afrinashar1@gmail.com">contact webmaster</a> */}
    <Modal show={show} key={edit._id} className='shadow p-3 mb-5 bg-body rounded' onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
         
          <Modal.Title className='text '> {edit.firstName}  {edit.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div class="bg-image hover-zoom"><Image  className='w-100'   src={edit.imageUrl}  /> </div></Modal.Body>
        <Modal.Footer>

        <div className='d-flex flex-row justify-content-around'><h6> </h6><p>{edit.description}</p>  </div>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          
          <FaArrowAltCircleDown variant="success"  className='bg-primary ' type="button" onClick={() => handleDownload(edit.imageUrl, edit.title)} ></FaArrowAltCircleDown> 
        
           
                <DropdownButton  className=''   >

      <Dropdown.Item   className='  text-light  ' >    <Link to={`/update/${edit._id}`}>Update</Link> </Dropdown.Item>
      <Dropdown.Item className='bg-primary text-light '  ><Link to={`/delete/${edit._id}`}>Delete</Link></Dropdown.Item>
  
    </DropdownButton>
   
  
        </Modal.Footer>
      </Modal>
      <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item  ">
      <a class="page-link  " href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item disabled  ">
      <a class="page-link" href="#">2 <span class="sr-only"> </span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav> </>);
};


export default PhotoList;