import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div class="welcomesign"> 
        <h2> Welcome to SEPER</h2>
        <div class="maincontent">
          <p>Begin your search now. The Software Practice Empirical Evidence 
            Database allows you to search for recommended articles about a specific 
            Software Engineering practice. </p>
          <div class="searchbar">
            <h4>Begin your first search:</h4>
            <br></br>
            <input type="text" placeholder="Enter search"></input>
            <br></br>
              <button>Search</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;