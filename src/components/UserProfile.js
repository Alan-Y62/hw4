import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
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
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;