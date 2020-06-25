import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

class SwipingPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            users:this.props.users,
            newusersARR: [],
            counter: 0, 
            gender: this.props.match.params.gender,
            min: this.props.match.params.min,
            max: this.props.match.params.max
        }
    }

    handleClick = () => {
        if (this.state.counter>= this.state.newusersARR.length-1) {
            console.log(this.state.users.length);
            Swal.fire({
                icon: 'error',
                title: 'we dont have more match for you...',
                text: 'Go Back To Main Menu!',
              })  
        }
        else
        {
            this.setState({
                counter: this.state.counter+1
            });
        }
      }

      filtArr = () => {
            for (let i = 0; i < this.state.users.length; i++) {
                const usr = this.state.users[i];
                const minimumAge = this.state.min;
                const maximunAge = this.state.max;
                const genderProf = this.state.gender;
                
                if (usr.Age >= minimumAge && usr.Age <= maximunAge && usr.Gender.trim() === genderProf) {
                    this.state.newusersARR.push(usr);
                }
            }
            if (this.state.newusersARR.length === 0) {
                console.log(this.state.users.length);
                alert('no more matches');
            }
           
             this.setState({
                 newusersARR:this.state.newusersARR
             });
      }

      componentWillMount() {
        
       this.filtArr();
        }
        
    
    render() { 
        return (
            <div>
                <div className='card MatchingPeople' style={{ width: '18rem' }}>
                    
                    <img className="card-img-top" src={this.state.newusersARR[this.state.counter].Image} />
                    <div className='card-body'>
                        <h3 className='card-title'>{this.state.newusersARR[this.state.counter].Name}</h3>
                        <p className='card-text'>
                            age: {this.state.newusersARR[this.state.counter].Age}
                            <br />
                            gender: {this.state.newusersARR[this.state.counter].Gender}
                            <br />
                            city: {this.state.newusersARR[this.state.counter].City}
                            <br />
                            height: {this.state.newusersARR[this.state.counter].Height}
                            <br />
                            {
                            this.state.newusersARR[this.state.counter].Premium?
                            <p>hobbies: {this.state.newusersARR[this.state.counter].Hobbies}</p>:
                              ""}
                        </p>
                        <button className="myButton" onClick={() => this.props.AddFavorite(this.state.newusersARR[this.state.counter].Id)}>Like</button>
                        <button className="myButton" onClick={this.handleClick}>Next</button>
                    </div>
                </div>
            </div>

          );
    }
}
 
export default withRouter (SwipingPage);