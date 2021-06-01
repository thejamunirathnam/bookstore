import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Registration}></Route>
          <Route path="/Dashboard" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
