import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/About">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
