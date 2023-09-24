// Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
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
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
