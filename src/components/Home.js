import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Credits from './Credits';

class Home extends Component {
  render() {
    return (
        <div>
          <div className="navbar">
            <Link className="btn btn-primary mr-2" to="/"> Home </Link>
            <Link className="btn btn-primary mr-2" to="/debits"> Debits </Link>
            <Link className="btn btn-primary mr-2" to="/credits"> Credits </Link>
            <Link className="btn btn-primary mr-2" to="/userprofile"> User Profile </Link>
            <Link className="btn btn-primary" to="/login"> Log In </Link>
          </div>
          <img  style= {{height: "300px", width: "500px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecollegeinvestor.com%2Fwp-content%2Fuploads%2F2018%2F05%2FWP_1stbankacc.png&f=1&nofb=1" alt="bank"/>
          <h1>Bank of React</h1>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;