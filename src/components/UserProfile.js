import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <Navbar></Navbar>
          <div className="container bd">
            <h1>User Profile</h1>

            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
          </div>
        </div>
    );
  }
}

export default UserProfile;