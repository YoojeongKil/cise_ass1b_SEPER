import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";
import axios from 'axios';
import React, { useState } from "react";
 
class SEPractice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       articles: []
    }
 
    this.handlePractice = this.handlePractice.bind(this);
  }
  
  handlePractice (optionItems) {
    axios.get(`https://thawing-thicket-05050.herokuapp.com/api/books/option/${optionItems}`)
    .then((res) =>{
      this.setState({articles: res.data});
      console.log('state', this.state);
    })
    .catch(()=>{
      alert('error retrieving data');
    });
  }
 
render() {
    return (
 
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            <Dropdown onDropdown={this.handlePractice}/>
            <Styles>
                <Table
                data={this.state.articles}
                columns={tablecolumns}
                />
            </Styles>
      </div>
    );
  }
}
export default SEPractice;
