import React from 'react';
import axios from 'axios';
import '../App.css';
import logo from '../logo.svg';
import { Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class StartApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      redirect: false,
      userID: ""
    };
    this.onStartGame=this.onStartGame.bind(this);
  }

  onStartGame(e){
    e.preventDefault();
    axios.post('/users/start', {})
      .then(res => {
        console.log(res.data);
        this.setState({
          userID: res.data.userID,
          redirect: true
        })
    });
  }

  render(){
      if(this.state.redirect){
        return <Redirect to='/screen'/>;
      }
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.apiResponse}
            <h1>Welcome to Murder Mystery</h1>
          <Button variant="primary" size="lg" onClick={this.onStartGame}> Start</Button>
        </header>
      </div>
    );
  }
}

export default StartApp;
