import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = dateTime.toLocaleTimeString();
  const formattedDate = dateTime.toLocaleDateString();

  return (
    <div>
      <div>Waktu: {formattedTime}</div>
      <div>Tanggal: {formattedDate}</div>
    </div>
  );
}

export default Clock;
