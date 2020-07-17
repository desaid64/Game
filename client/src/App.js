import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartApp from "./component/StartApp"
import Screen from "./component/Screen"
class App extends React.Component{

  render(){
    return (
      <Router>
      <Switch>
        <Route path="/" component={StartApp} exact />
        <Route path="/screen" component={Screen} />
      </Switch>
      </Router>
    );
  }
}

export default App;
