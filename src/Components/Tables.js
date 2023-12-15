import BootstrapTable from 'react-bootstrap-table-next';
import { getPhotos } from '../URL';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

  const StudentDetails = () => {
    const { SearchBar } = Search;

    const { data: student, isLoading  } = useQuery('Student', getPhotos);
    if (isLoading) {
        return <div>Loading...</div>;
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
    color:"#ffffff" 
  }
},{
  dataField: 'imageUrl',
  text: 'Image',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
},{
  dataField: 'isVerified',
  text: 'isVerified',
  sort: true, headerStyle: {
    backgroundColor: '#004bff',
    color:"#ffffff" 
  }
},];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total bg-primary">
    Showing { from } to { to } of { size } Results
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
  
 <Link to="create" className='btn btn-outline-primary  '>Add </Link>    
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
        <BootstrapTable 
        rowStyle={ rowStyle }
          { ...props.baseProps }
        pagination={ paginationFactory(options) }  />
      </div>
    )
  }
</ToolkitProvider>
 
  </>)
}
export default StudentDetails