import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
    render() {
      return (
          <div>
            <div className="navbar">
              <Link className="btn btn-primary mr-2" to="/"> Home </Link>
              <Link className="btn btn-primary mr-2" to="/debits"> Debits </Link>
              <Link className="btn btn-primary mr-2" to="/credits"> Credits </Link>
              <Link style= {{"margin-right": "300px" }} className="btn btn-primary" to="/userprofile"> User Profile </Link>
              <Link className="btn btn-primary" to="/login"> Log In </Link>
            </div>
          </div>
      );
    }
  }
  
  export default Credits;