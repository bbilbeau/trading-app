import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import Home from "./components/Home";
import Assets from "./components/Assets";
import Details from "./components/Details";

function App() {
  return (
    <Router>
        <header className="main-header">
          <nav>
            <ul className="menu">
              <li className="menu__list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/assets">Assets</Link>
              </li>
              <li className="menu__list-item">
                <Link to="/details">Details</Link>
              </li>
            </ul>
          </nav>
        </header>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/assets/" component={Assets} />
        <Route path="/details/:stock?" component={Details} />
      </div>
    </Router>
  );
}

export default App;
