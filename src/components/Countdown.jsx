// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = +new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      timeLeft = { years, months, days, hours, minutes, seconds };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { years, months, days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <CircularProgressbar value={years} maxValue={100} text={`${years}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Years</div>
      </div>
      <div className="countdown-item">
        <CircularProgressbar value={months} maxValue={12} text={`${months}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Months</div>
      </div>
      <div className="countdown-item">
        <CircularProgressbar value={days} maxValue={30} text={`${days}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Days</div>
      </div>
      <div className="countdown-item">
        <CircularProgressbar value={hours} maxValue={24} text={`${hours}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Hours</div>
      </div>
      <div className="countdown-item">
        <CircularProgressbar value={minutes} maxValue={60} text={`${minutes}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Minutes</div>
      </div>
      <div className="countdown-item">
        <CircularProgressbar value={seconds} maxValue={60} text={`${seconds}`} styles={buildStyles({
          pathColor: '#3e98c7',
          textColor: '#ffffff',
          trailColor: '#d6d6d6',
          backgroundColor: '#0d1b2a',
        })} />
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
