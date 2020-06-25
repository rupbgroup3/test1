import React, { Component } from 'react';
import Swal from 'sweetalert2';

class LikeList extends Component {
    constructor(props) {
        super(props);
        this.state={
            newusersARR: this.props.favusers,
            counter: 0
        }
    }
    
    handleClick = () => {       
        if (this.state.counter>= this.state.newusersARR.length-1) {
            Swal.fire({
                icon: 'error',
                title: 'you dont have more likes in your list...',
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
    render() { 
        return ( 
            <div>
                {this.state.newusersARR.length>0?
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
                    <button className="myButton" onClick={this.handleClick}>Next</button>
                </div>
            </div> : Swal.fire({
                icon: 'error',
                title: 'you dont have any likes in your list...',
                text: 'Start Swiping to add likes!'
              })
             
                }
            
        </div>
         );
    }
}
 
export default LikeList;