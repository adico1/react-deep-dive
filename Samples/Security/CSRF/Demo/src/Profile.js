import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const serverUrl = document.location.host.replace("3000", "3001");
console.log("serverUrl:", serverUrl);
const handleTransfer = () => {
  axios
    .post(`https://${serverUrl}/transfer`, { amount: 100, to: "friend_account" })
    .then((response) => {
      console.log(response.data);
    });
};

function Profile({ balance }) {
  return (
    <div className="profile">
      <h2>Bank Account</h2>
      <p>Balance: ${balance}</p>
      <button onClick={handleTransfer}>Transfer $100 to Friend</button>
    </div>
  );
}

Profile.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Profile;
