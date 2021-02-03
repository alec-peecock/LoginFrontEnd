import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Navbar from "./components/navbar.component"
import Home from "./components/home.component"
import Login from "./components/login.component"
import NewUser from "./components/new-user.component"
import ChangeDetails from "./components/change-details.component"
function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/newuser" component={NewUser}/>
      <Route path="/edit" component={ChangeDetails}/>
    </Router>
  );
}

export default App;
