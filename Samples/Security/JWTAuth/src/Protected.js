import React from 'react';

function Protected() {
  return (
    <div className="protected-container">
      <h2>Welcome to the protected route!</h2>
      <p>This content is only accessible to logged-in users.</p>
    </div>
  );
}

export default Protected;
