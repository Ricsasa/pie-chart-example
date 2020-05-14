import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Project from "./components/Project";

import projects from './projects';

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Ejemplo</h1>
      </div>
      <BrowserRouter>
        <nav className="nav-container">
          <ul>
            {projects.map((project, i) => (
              <li key={i}>
                <Link to={`/project/${project.id}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          <Route path="/project/:projectId">
            <Project />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
