import React, { useState } from "react";
// import axios from "axios";
// import { redirect } from "react-router";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Protected from "./Protected";

function App() {
  const [token, setToken] = useState(null);

  // useEffect(
  //   (async () => {
  //     await axios.post("https://ypfsnw-4000.csb.app/register", {
  //       email: "olivier@mail.com",
  //       password: "bestPassw0rd",
  //     });
  //   })(),
  //   [],
  // );

  const onLoginSucces = (newToken, cb) => {
    console.log('setting token', newToken);
    setToken(newToken);
    console.log('token set', token);
    cb();
  };

  console.log('token: ', token)

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              token ? <Navigate to="/protected" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={<Login onLoginSuccess={onLoginSucces} />}
          />
          <Route
            path="/protected"
            element={token ? <Protected /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
