import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartApp from "./component/StartApp"
import Navigation from "./component/Navigation"
import EndApp from "./component/EndApp"


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userID: ""
    };
    this.getUser=this.getUser.bind(this);
  }
  getUser(id){
    this.setState({
      userID: id
    });
  }
  render(){
    return (
      <Router>
      <Switch>
        <Route path="/" exact> <StartApp getUser ={this.getUser} /></Route>
        <Route path="/nav">  <Navigation userID={this.state.userID} getUser ={this.getUser} /> </Route>
        <Route path="/finish"> <EndApp userID={this.state.userID} /> </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
