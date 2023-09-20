import React, { useState } from 'react';

function Profile({ balance, setBalance }) {
  return (
    <div className="profile">
      <h2>Bank Account</h2>
      <p>Balance: ${balance}</p>
      <button onClick={() => setBalance(balance + 100)}>Deposit $100</button>
    </div>
  );
}

export default Profile;
