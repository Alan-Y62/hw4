import React, {Component} from 'react';
import './abal.css'

class AccountBalance extends Component {
  render() {
    return (
        <div className="acc-bal">
          <h3 className="acc-head"> AccountBalance </h3>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;