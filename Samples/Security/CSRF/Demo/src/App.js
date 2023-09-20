import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Malicious from './Malicious';

function App() {
  const [balance, setBalance] = useState(1000);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/profile">Bank Account</Link>
            </li>
            <li>
              <Link to="/malicious">Win a Prize!</Link>
            </li>
          </ul>
        </nav>
        <Route path="/profile" render={() => <Profile balance={balance} setBalance={setBalance} />} />
        <Route path="/malicious" component={Malicious} />
      </div>
    </Router>
  );
}

export default App;
