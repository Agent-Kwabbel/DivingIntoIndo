"use client";

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

type TimeDisplayProps = {
  city: string;
  timezone: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ city, timezone }) => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(moment().tz(timezone).format('HH:mm'));

    const intervalId = setInterval(() => {
      setTime(moment().tz(timezone).format('HH:mm'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  if (!time) {
    return <p>Loading time...</p>;
  }

  return (
      <p>{city}: {time}</p>
  );
};

export default TimeDisplay;
