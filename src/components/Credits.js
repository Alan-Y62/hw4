import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Credits extends Component {
    render() {

      /* Display all credits */
      let creditsList = () => {
      return this.props.credits.map((credit) => {
          let date = credit.date.slice(0,10);
          return <li className="list-group-item" key={credit.id}>${credit.amount} | {credit.description} | {date}</li>
      })
  }

      return (
          <div>
            <div className="navbar">
              <Link className="btn btn-primary mr-2" to="/"> Home </Link>
              <Link className="btn btn-primary mr-2" to="/debits"> Debits </Link>
              <Link className="btn btn-primary mr-2" to="/credits"> Credits </Link>
              <Link className="btn btn-primary mr-2" to="/userprofile"> User Profile </Link>
              <Link className="btn btn-primary" to="/login"> Log In </Link>
            </div>
            <h1>Credits</h1>
            <ul className="list-group list-group-flush transaction-lists">
                {creditsList()}
            </ul>
            <h2>Add Credit</h2>
            <form className="login-form" onSubmit={this.props.addCredit}>
              <div className="form-row mb-2 ml-1">
                  <div className="description">
                      <label for="description" className="form-label">Description</label>
                      <input type="text" className="form-control" name="description"/>
                  </div>
                  <div className="amount mb-2 ml-2">
                      <label for="amount" className="form-label">Amount</label>
                      <input type="number" step="any" className="form-control" name="amount"/>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary ml-1 mb-3">Add Credit</button>
            </form>
            <h3> AccountBalance </h3>
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
      );
    }
  }
  
  export default Credits;