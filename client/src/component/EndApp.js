import React, { useImperativeHandle } from 'react';
import axios from 'axios';
import '../App.css';

class EndApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userID: this.props.userID,
      diffTime: "",
      answer: "",
    };

  }

  componentDidMount() {

    axios.get('/users/'+this.state.userID)
      .then(res => {
        this.setState({
            userID: this.state.userID,
            diffTime: (res.data.diffTime/60).toFixed(2),
            answer: res.data.answer
        });
    })
  }

  render(){
      return (
      <div className="App">
        <header className="App-header">
            <h1> Thanks for playing the game!</h1>
            <h1> The user {this.state.userID} took {this.state.diffTime} mins to complete.</h1>
            <h1> The answer {this.state.answer} was Incorrect. Try Again !</h1>
        </header>
      </div>
    );
  }
}

export default EndApp;
