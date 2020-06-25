import React, { Component } from "react";
import "./App.css";
import HomePage from "./Components/HomePage.jsx";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchInfoPage from "./Components/SearchInfoPage.jsx";
import SwipingPage from "./Components/SwipingPage.jsx";
import LikeList from "./Components/LikeList";
import BackButton from "./Images/BackButton.png";
import HomeButton from "./Images/HomeButton.png";
import Purple from "./Images/Purple-Heart.jpg";
import Swal from 'sweetalert2';

const BcImg = require("./Images/love.jpg");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      favusers: []
    };
    let local = false;

    this.apiUrl = "http://localhost:44331/api/Users";
    if (!local) {
      this.apiUrl = "http://proj.ruppin.ac.il/bgroup3/mobile/server/tinderwebapi/api/users";
    }
    this.apiUrlFav= "http://proj.ruppin.ac.il/bgroup3/mobile/server/tinderwebapi/api/users/fav";
  }

  componentDidMount() {
    fetch(this.apiUrl)
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          console.log(result);
          this.setState({ users: result });
        },
        error => {
          console.log("err post=", error);
        }
      ); 
  }

  GetFavUsers(){
    fetch(this.apiUrlFav)
    .then(res => {
      return res.json();
    })
    .then(
      result => {
        console.log(result);
        this.setState({ favusers: result });
      },
      error => {
        console.log("err post=", error);
      }
    );
  }


  SendToFavorite = id => {
    //pay attention case sensitive!!!! should be exactly as the prop in C#!
    console.log(id);


    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(id),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8" //very important to add the 'charset=UTF-8'!!!!
      })
    })
      .then(res => {
        console.log("res=", res);
        return res.json();
      })
      .then(
        result => {
          console.log("fetch POST= ", result);
          console.log(result.Avg);
        },
        error => {
          console.log("err post=", error);
        }
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your like has been saved in your likes list!',
        timer: 3000
      })
  };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "noRepeat",
          backgroundImage: "url(" + BcImg + ")",
          backgroundSize: "cover",
          height: "800px"
        }}
      >
        <div className="row BtnsHeader">
          <div className="col">
            <Link to={"/"}>
              <button id="ButtonBack">
                <img src={BackButton} />
              </button>
            </Link>
            <Link to={"/"}>
              <button id="ButtonHome">
                <img src={HomeButton} />
              </button>
            </Link>
            <Link to={"/like"}>
              <button id="FavBtn" onClick={this.GetFavUsers()}>
                <img src={Purple} />
              </button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Search">
            <SearchInfoPage />
          </Route>
          <Route path="/Match/:gender/:min/:max" component={SwipingPage}>
            <SwipingPage
              users={this.state.users}
              AddFavorite={this.SendToFavorite}
            />
          </Route>
          <Route path="/like">
            <LikeList  favusers= {this.state.favusers}  />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
