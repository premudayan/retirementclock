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
    <div style={{ textAlign: 'left', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <label htmlFor="heading" style={{ marginRight: '10px', minWidth: '150px', fontSize: '1rem', color: '#fff' }}>Enter Heading:</label>
        <input 
          id="heading"
          type="text" 
          placeholder="Enter heading" 
          value={heading} 
          onChange={handleHeadingChange} 
          style={{ padding: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <label htmlFor="date" style={{ marginRight: '10px', minWidth: '150px', fontSize: '1rem', color: '#fff' }}>Enter Target Date:</label>
        <input 
          id="date"
          type="date" 
          value={date} 
          onChange={handleDateChange} 
          style={{ padding: '5px' }}
        />
      </div>
      <button onClick={handleSave} style={{ padding: '5px 10px', color: 'black', backgroundColor: '#3e98c7', border: 'none', borderRadius: '5px' }}>
        Save
      </button>
    </div>
  );
};

export default DateInput;
