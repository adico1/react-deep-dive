// routes/About.js
import React from 'react';

const About = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

// Simulate a network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const exportWithDelay = async () => {
  await delay(2000);  // 2 seconds delay
  return Home;
};

export default exportWithDelay();