import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
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
            <li>
              <Link to="/malicious">Win a Prize!</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile balance={balance} setBalance={setBalance} />} />
          <Route path="/malicious" element={Malicious} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
