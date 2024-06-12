// src/App.js
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Countdown from './components/Countdown';
import DateInput from './components/DateInput';
import { FaCog } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [cookies] = useCookies(['retirementDate', 'countdownHeading', 'backgroundImage']);
  const [retirementDate, setRetirementDate] = useState(cookies.retirementDate || '');
  const [countdownHeading, setCountdownHeading] = useState(cookies.countdownHeading || 'My Countdown Clock');
  const defaultImageUrl = 'https://rockcrestfinancial.com/wp-content/uploads/2020/03/Add-Beach-Background-To-Photo-Desktop-Wallpapers-1024x578.jpg';
  const [backgroundImage, setBackgroundImage] = useState(cookies.backgroundImage !== undefined ? cookies.backgroundImage : defaultImageUrl);
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

  const currentBackgroundImage = backgroundImage ? backgroundImage : defaultImageUrl;

  return (
    <div className="App" style={{ backgroundImage: `url(${currentBackgroundImage})` }}>
      <div className="config-icon" onClick={handleConfigClick}>
        <FaCog />
      </div>
      {showDateInput ? (
        <DateInput 
          defaultDate={cookies.retirementDate} 
          defaultHeading={cookies.countdownHeading}
          defaultImage={cookies.backgroundImage !== undefined ? cookies.backgroundImage : defaultImageUrl}
          onDateSet={(date) => setRetirementDate(date)} 
          onHeadingSet={(heading) => setCountdownHeading(heading)}
          onImageSet={(image) => setBackgroundImage(image)}
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
