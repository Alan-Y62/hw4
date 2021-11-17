import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login'
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount;
    })
    credits.forEach((credit) => {
      creditSum += credit.amount;
    })

    let accountBalance = (creditSum - debitSum).toFixed(2);
    this.setState({
      debits, credits, accountBalance
    });
  }

  addDebit = (e) => {
    e.preventDefault();

    const now = new Date();
    const newDebit = {
      amount: parseFloat(e.target.amount.value),
      description: e.target.description.value,
      date: String(now.getFullYear()) + "-" + String(now.getMonth()) + "-" + String(now.getDay())
    }
    const newbal = (this.state.accountBalance - newDebit.amount).toFixed(2)
    this.setState(prevState => ({
      debits: [...prevState.debits, newDebit],
      accountBalance: newbal
    }))
  }

  addCredit = (e) => {
    e.preventDefault();

    const now = new Date();
    const newCredit = {
      amount: parseFloat(e.target.amount.value),
      description: e.target.description.value,
      date: String(now.getFullYear()) + "-" + String(now.getMonth()) + "-" + String(now.getDay())
    }
    const newbal = (this.state.accountBalance - newCredit.amount).toFixed(2)
    this.setState(prevState => ({
      credits: [...prevState.credits, newCredit],
      accountBalance: newbal
    }))
  }

  render() {

    const { debits, credits } = this.state;

    const creditsComponent = () => (<Credits addCredit={this.addCredit} credits = {credits} accountBalance={this.state.accountBalance}/>);
    const debitsComponent = () => (<Debits addDebit={this.addDebit} debits = {debits} accountBalance={this.state.accountBalance}/>);

    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={debitsComponent}/>
            <Route exact path="/credits" render={creditsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;