import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Swal from 'sweetalert2';

class SearchInfoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      max: "",
      min: "",
      gender: "",
      size: ""
    };
  }
clicked=()=>{

}
  Cng1 = e => {
    
    this.setState({
      gender: e.target.value,
      size: e.target.value
    });

    console.log(this.state.gender);
  };

  Cng2 = e => {
    this.setState({ min: e.target.value });
    console.log(this.state.min);

   
  };
  Cng3 = e => {
    this.setState({ max: e.target.value });
    console.log(this.state.max);

    
  };

  render() {
    return (
      <div className="DivSearch container">
        <form onSubmit={this.sendDataSomewhere}>
          <div>
            <label><h1>Choose your partner gender:</h1></label>
          </div>
          <div className="gender">
            <label><h5>Male</h5></label>
            <input
              onChange={this.Cng1}
              checked={this.state.size === "male"}
              id="male"
              name="gender"
              type="radio"
              value="male"
            />
            <br />
            <label> <h5>Female</h5></label>
            <input
              onChange={this.Cng1}
              checked={this.state.size === "female"}
              id="female"
              name="gender"
              type="radio"
              value="female"
            />
          </div>
          <div>
            <lable><h5>Choose your partner age:</h5></lable>
          </div>
          <div className="age">
            <lable><h5>between</h5> </lable>
            <input
              id="min"
              name="min"
              value={this.state.min}
              onChange={this.Cng2}
              type="text"
            />
            <br />
            <lable> <h5>and</h5> </lable>
            <input
              id="max"
              name="max"
              value={this.state.max}
              onChange={this.Cng3}
              type="text"
            />
          </div>

          <Link
            to={
              "/Match/" +
              this.state.gender +
              "/" +
              this.state.min +
              "/" +
              this.state.max +
              "/"
            }
          >
            <button className="btn btn-primary" id="Search" onClick={this.clicked}>
              <h4>Search</h4>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchInfoPage);
