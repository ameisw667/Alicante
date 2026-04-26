import React, { useState, useEffect } from 'react';
import { intervalToDuration, isBefore, type Duration } from 'date-fns';

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-05-01T13:10:00');
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (isBefore(now, targetDate)) {
        setDuration(intervalToDuration({ start: now, end: targetDate }));
      } else {
        setDuration(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!duration) return <div className="countdown-expired">Take off! ✈️</div>;

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <span className="count-num">{duration.days || 0}</span>
        <span className="count-label">Days</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-box">
        <span className="count-num">{duration.hours || 0}</span>
        <span className="count-label">Hrs</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-box">
        <span className="count-num">{duration.minutes || 0}</span>
        <span className="count-label">Min</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-box">
        <span className="count-num">{duration.seconds || 0}</span>
        <span className="count-label">Sec</span>
      </div>
    </div>
  );
};

export default Countdown;
