import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';




function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={ Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
