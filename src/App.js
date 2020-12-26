import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { Home, Nav, Blog, Project, Resume } from "./pages";
import { ProApplix, ProPersonal, ProShapsol } from "./components";

function App() {
  let history = useHistory();

  const handlePrev = () => {
    history.push("/project");
  };
  return (
    <div className="wrap">
      <header>
        <Nav />
      </header>
      <div className="main h-full bg-white">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/applix">
            <ProApplix handlePrev={handlePrev} />
          </Route>
          <Route path="/shapsol">
            <ProShapsol handlePrev={handlePrev} />
          </Route>
          <Route path="/personal">
            <ProPersonal handlePrev={handlePrev} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
