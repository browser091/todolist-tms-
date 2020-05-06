import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Главная страница</a>
          </li>
          <li>
            <a href="/application">Планировщик</a>
          </li>
          <li>
            <a href="/about">О проектк</a>{" "}
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/application" component={App} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        {/* <App /> */}
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
