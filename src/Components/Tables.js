import BootstrapTable from 'react-bootstrap-table-next';
import { getPhotos } from '../api';
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
  sort: true
}, {
  dataField: 'lastName',
  text: 'Last Name',
  sort: true
}, {
  dataField: 'email',
  text: 'Email',
  sort: true
},{
  dataField: 'description',
  text: 'Description',
  sort: true
},{
  dataField: 'imageUrl',
  text: 'Image',
  sort: true
},{
  dataField: 'isVerified',
  text: 'isVerified',
  sort: true
},];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
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
  return (<>
  <Link className=' btn btn-outline-warning m-3'><span className='text-black'>Add Students</span></Link>
    
    <ToolkitProvider
  keyField="Student"
  data={ student }
  columns={ columns }
  search
 
>
  {
    props => (
      <div>
       
        <SearchBar className="border border-warning border-opacity-50" { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        pagination={ paginationFactory(options) }  />
      </div>
    )
  }
</ToolkitProvider>
 
  </>)
}
export default StudentDetails