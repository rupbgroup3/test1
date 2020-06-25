import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

const BcImg = require("../Images/love.jpg");

class HomePage extends Component {
    constructor(props) {
        super(props);
        
    }
       
    render() { 
        return ( 
            <div>
                 <div className="container-fluid">
                    <div className='row HomePage'></div>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-6'><Link to={'/Search'} ><button onClick={this.props.data}className="btn btn-success" id="btnStart">Start Exploring</button></Link></div>
                        <div className='col-3'></div>
                    </div>
                 </div>
            </div>
         );
    }
}
 
export default withRouter(HomePage);;