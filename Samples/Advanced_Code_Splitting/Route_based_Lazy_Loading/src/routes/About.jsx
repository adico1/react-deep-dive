// About.js
import React, { useEffect, useState } from 'react';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);  // 2 seconds delay
    return () => clearTimeout(timer);  // Cleanup the timer
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
