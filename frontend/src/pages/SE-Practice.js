//import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from 'axios';

const SEPractice = () => {
  const articles= 
    axios.get('http://localhost:5000/api/books')
    .then(res => {
      this.setState({
        articles: res.data
      })
    })
    .catch(err =>{
      console.log('Error from ShowBookList');
    });

  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            <Dropdown/>
             <Styles>
               <Table
                data={articles}
                columns={tablecolumns}
               />
            </Styles>
    </div>
  );
}

export default SEPractice;  
