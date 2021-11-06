import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
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
        <div className="ml-5 mt-5">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label for="userName">User Name</label>
              <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LogIn