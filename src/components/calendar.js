import React, { useState, useEffect } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <h1>Current Date: {currentDate.toLocaleString()}</h1>
    </div>
  );
}