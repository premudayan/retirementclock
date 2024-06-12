// src/components/DateInput.js
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const DateInput = ({ defaultDate, defaultHeading, onDateSet, onHeadingSet, onSaveComplete }) => {
  const [date, setDate] = useState(defaultDate || '');
  const [heading, setHeading] = useState(defaultHeading || '');
  const [cookies, setCookie] = useCookies(['retirementDate', 'countdownHeading']);

  useEffect(() => {
    setDate(defaultDate);
    setHeading(defaultHeading);
  }, [defaultDate, defaultHeading]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleSave = () => {
    if (date) {
      setCookie('retirementDate', date, { path: '/', expires: new Date(date) });
      onDateSet(date);
    }
    if (heading) {
      setCookie('countdownHeading', heading, { path: '/' });
      onHeadingSet(heading);
    }
    onSaveComplete(); // Switch back to the main screen
  };

  return (
    <div style={{ textAlign: 'left', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', width: '100%' }}>
        <label htmlFor="heading" style={{ flexBasis: '30%', fontSize: '1.5rem', color: '#fff' }}>Enter Heading:</label>
        <input 
          id="heading"
          type="text" 
          placeholder="Enter heading" 
          value={heading} 
          onChange={handleHeadingChange} 
          style={{ flex: '1', padding: '10px', fontSize: '1.2rem' }}
        />
      </div>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', width: '100%' }}>
        <label htmlFor="date" style={{ flexBasis: '30%', fontSize: '1.5rem', color: '#fff' }}>Enter Target Date:</label>
        <input 
          id="date"
          type="date" 
          value={date} 
          onChange={handleDateChange} 
          style={{ flex: '1', padding: '10px', fontSize: '1.2rem' }}
        />
      </div>
      <button onClick={handleSave} style={{ padding: '15px 20px', fontSize: '1.5rem', color: 'black', backgroundColor: '#3e98c7', border: 'none', borderRadius: '5px', width: '100%' }}>
        Save
      </button>
    </div>
  );
};

export default DateInput;
