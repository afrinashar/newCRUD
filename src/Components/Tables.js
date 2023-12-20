import BootstrapTable from 'react-bootstrap-table-next';
import { getPhotos } from '../URL';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import {
  BsListUl,
  BsThreeDotsVertical,
  BsGrid3X3,
} from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Components/spinner';
  const StudentDetails = () => {
    const { SearchBar } = Search;
    const logOut = () => {
      window.localStorage.clear();
      window.location.href = "./sign-in";
    };
    const { data: student, isLoading,isError  } = useQuery('Student', getPhotos);
    if (isLoading) {
        return <><Spinner></Spinner></>
      }
      var notifyError = () => toast.success("Logged In success");
      //notifyError()
      var notifySuccess = () => toast.success("Logged In success");
  if (isError) {
    return  <> 
   
    notifyError()
    <div>Error fetching photos</div></>;
  } 

console.log(student,"stu");
    const columns = [{
  dataField: 'firstName',
  text: 'FirstName',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
}, {
  dataField: 'lastName',
  text: 'Last Name',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
}, {
  dataField: 'email',
  text: 'Email',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
},{
  dataField: 'description',
  text: 'Description',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" ,
    
  }
} ,{
  dataField: 'isVerified',
  text: 'isVerified',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
},];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total  ">
    Showing <span className='text-primary'>{ from }</span> to <span className='text-primary'>{ to }</span> of <span className='text-primary text-bold'>{ size }</span> Results
  </span>
);

const options = {
  paginationSize: 4,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: student.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};
console.log(student,options,"sti");
const rowStyle = { backgroundColor: '#eef2fc',color: '#000000'};

 
  return (<>
  <nav className="navbar   top-0 navbar-light sticky-top bg-primary"  >
  <div className="container-fluid bg-primary top-0  sticky-top">
   
    <Link to="/create" className='btn btn-outline-light  '>Add </Link>
    <Link className="btn btn-outline-light" to={"/"}>
                      <BsListUl />
                    </Link>
                  
                 
                    <Link className="btn btn-outline-light" to={"/tables"}>
                    <BsGrid3X3 className='' />
                    </Link>
                    <h1 className='text-white'>Celebrities Gallery</h1>
    <form className="d-flex input-group w-auto">
  
      
    </form>
    <button className='btn btn-danger' onClick={logOut}> LOG OUT</button>
  </div>
</nav>
   
    <ToolkitProvider
  keyField="Student"
  data={ student }
  columns={ columns }
 
  search
 
>
  {
    props => (
      <div>
       
        <SearchBar className="border border-primary border-opacity-50 fluid" { ...props.searchProps } />
        <hr />
        <BootstrapTable  className="m-3"
        rowStyle={ rowStyle }
          { ...props.baseProps }
        pagination={ paginationFactory(options) }  />
      </div>
    )
  }
</ToolkitProvider>
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
  </>)
}
export default StudentDetails