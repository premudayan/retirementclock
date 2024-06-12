// src/components/DateInput.js
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const DateInput = ({ defaultDate, defaultHeading, defaultImage, onDateSet, onHeadingSet, onImageSet, onSaveComplete }) => {
  const [date, setDate] = useState(defaultDate || '');
  const [heading, setHeading] = useState(defaultHeading || '');
  const [image, setImage] = useState(defaultImage || '');
  const [cookies, setCookie] = useCookies(['retirementDate', 'countdownHeading', 'backgroundImage']);

  useEffect(() => {
    setDate(defaultDate);
    setHeading(defaultHeading);
    setImage(defaultImage);
  }, [defaultDate, defaultHeading, defaultImage]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleHeadingChange = (e) => {
    setHeading(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
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
    // Save the image URL even if it's empty
    setCookie('backgroundImage', image, { path: '/' });
    onImageSet(image);
    onSaveComplete(); // Switch back to the main screen
  };

  return (
    <div className="input-container">
      <div className="input-group">
        <label htmlFor="heading" className="input-label">Enter Heading:</label>
        <input 
          id="heading"
          type="text" 
          placeholder="Enter heading" 
          value={heading} 
          onChange={handleHeadingChange} 
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="date" className="input-label">Enter Target Date:</label>
        <input 
          id="date"
          type="date" 
          value={date} 
          onChange={handleDateChange} 
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="image" className="input-label">Enter Image URL:</label>
        <input 
          id="image"
          type="text" 
          placeholder="Enter image URL" 
          value={image} 
          onChange={handleImageChange} 
          className="input-field"
        />
      </div>
      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </div>
  );
};

export default DateInput;
