import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  const formattedDate = time.toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' });
  const formattedTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' });

  return (
    <div>
      <div>Waktu: {formattedTime}</div>
      <div>Tanggal: {formattedDate}</div>
    </div>
  );
}

export default Clock;
