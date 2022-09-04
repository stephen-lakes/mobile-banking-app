import Home from "./Home";
import Navbar from "./Navbar";
import VirtualCards from "./VirtualCards";
import CardDetails from "./CardDetails";
import History from "./History";
import More from "./More";
import Investments from "./Investments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cards">
              <VirtualCards />
            </Route>
            <Route exact path="/cards/:id">
              <CardDetails />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/investments">
              <Investments />
            </Route>
            <Route exact path="/more">
              <More />
            </Route>
          </Switch>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;