import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Stats } from './components/stats/stats';
import './app.css';
import { Calculator } from './components/cabinet/calculator';

export const App = () => (
  <div>
    <Router>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/stats">Статистика региона</Link>
          </li>
          <li>
            <Link to="/cabinet">Социальный калькулятор</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/cabinet">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  </div>
);
