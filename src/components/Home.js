import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

class Home extends Component {
  render() {
    return (
        <div>
          <Navbar></Navbar>
          <div className="bd home">
            <img  style= {{height: "300px", width: "500px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecollegeinvestor.com%2Fwp-content%2Fuploads%2F2018%2F05%2FWP_1stbankacc.png&f=1&nofb=1" alt="bank"/>
            <h1>Bank of React</h1>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
        </div>
    );
  }
}

export default Home;