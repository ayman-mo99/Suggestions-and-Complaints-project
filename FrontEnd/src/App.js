import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Bottombar from "./components/Footer";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <Display />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>

        <Bottombar />
      </div>
    </Router>
  );
}

export default App;
