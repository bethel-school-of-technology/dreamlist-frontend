import React, { Component } from "react";

import { Link } from "react-router-dom";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

 
  }



  render() {
    return (
      <div className="container">
        {/* <header className="jumbotron">
          <h3>{this.state.content}</h3> */}
        {/* </header> */}
        <h1 className="welcome">Welcome To Dream List!</h1>
        <p className="write">Write and share your dreams as they come to life!</p>
        <div className="lbutton">
        <Link to={"/login"} className="nav-link">
         
        <button className="m-3 btn btn-md btn-info">Login</button>
                </Link>
                </div>
       

      </div>
    );
  }
}
