import React, { useState } from 'react';

const serverUrl = process.env.SANDBOX_URL;

const handleTransfer = () => {
  axios.post(`${serverUrl}/transfer`, { amount: 100, to: 'friend' })
    .then(response => {
      console.log(response.data);
    });
};

function Profile({ balance, setBalance }) {
  return (
    <div className="profile">
      <h2>Bank Account</h2>
      <p>Balance: ${balance}</p>
      <button onClick={handleTransfer}>Transfer $100 to Friend</button>
    </div>
  );
}

export default Profile;
