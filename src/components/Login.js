import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

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
          <Navbar></Navbar>
          <div className="container bd">
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type="text" name="userName" placeholder="USERNAME" onChange={this.handleChange} value={this.state.user.userName} />
              </div>
              <div>
                <input type="password" name="password" placeholder="PASSWORD" />
              </div>
              <button className="btn btn-success">Log In</button>
            </form>
        </div>
      </div>
    )
  }
}

export default LogIn