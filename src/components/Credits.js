import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {
    render() {

      /* Display all credits */
      let creditsList = () => {
      return this.props.credits.map((debit) => {
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
          </div>
      );
    }
  }
  
  export default Credits;