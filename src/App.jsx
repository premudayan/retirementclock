// src/App.js
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Countdown from './components/Countdown';
import DateInput from './components/DateInput';
import { FaCog } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [cookies] = useCookies(['retirementDate', 'countdownHeading']);
  const [retirementDate, setRetirementDate] = useState(cookies.retirementDate || '');
  const [countdownHeading, setCountdownHeading] = useState(cookies.countdownHeading || 'My Countdown Clock');
  const [showDateInput, setShowDateInput] = useState(!retirementDate);

  useEffect(() => {
    if (retirementDate) {
      setShowDateInput(false);
    }
  }, [retirementDate]);

  const handleConfigClick = () => {
    setShowDateInput(!showDateInput);
  };

  const handleSaveComplete = () => {
    setShowDateInput(false);
  };

  return (
    <div className="App">
      <div className="config-icon" onClick={handleConfigClick}>
        <FaCog />
      </div>
      {showDateInput ? (
        <DateInput 
          defaultDate={cookies.retirementDate} 
          defaultHeading={cookies.countdownHeading} 
          onDateSet={(date) => setRetirementDate(date)} 
          onHeadingSet={(heading) => setCountdownHeading(heading)}
          onSaveComplete={handleSaveComplete}
        />
      ) : (
        <>
          <h1 style={{ color: '#fff', marginBottom: '20px' }}>{countdownHeading}</h1>
          <Countdown targetDate={retirementDate} />
        </>
      )}
    </div>
  );
};

export default App;
