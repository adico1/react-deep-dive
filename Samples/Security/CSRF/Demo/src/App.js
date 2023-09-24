import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Profile from './Profile';

function App() {
  const [balance, setBalance] = useState(1000);

  const serverUrl = document.location.host.replace("3000", "3002");
  console.log("serverUrl:", serverUrl);

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
                <span>pushed by a malicious user thru email, SMS, notifications, XSS and alike.</span>
                <Link to="{`http://${serverUrl}/malicious.html`}">Win A Prize</Link>
              </div>
            </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile balance={balance} setBalance={setBalance} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
