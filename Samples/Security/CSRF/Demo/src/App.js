import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Malicious from './Malicious';
import Profile from './Profile';

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
            <div>
              <div className={'notification show'}>
                <Link to="http://localhost:3002/malicious.html">Bank Account</Link>
              </div>
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile balance={balance} setBalance={setBalance} />} />
          <Route path="/malicious" element={<Malicious />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
