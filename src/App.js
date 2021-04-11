import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import "tailwindcss/tailwind.css";
import SignIn from "./components/SignIn";
import Rooms from "./components/Rooms";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
