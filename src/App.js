import React, { useState } from 'react';

function TravelForm() {
  const [vacationLength, setVacationLength] = useState('');
  const [expectedBudget, setExpectedBudget] = useState('');
  const [selfDescription, setSelfDescription] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [specificRequests, setSpecificRequests] = useState('');

  const handleVacationLengthChange = (event) => {
    setVacationLength(event.target.value);
  };

  const handleExpectedBudgetChange = (event) => {
    setExpectedBudget(event.target.value);
  };

  const handleSelfDescriptionChange = (event) => {
    setSelfDescription(event.target.value);
  };

  const handlePreferredLocationChange = (event) => {
    setPreferredLocation(event.target.value);
  };

  const handleTravelDateChange = (event) => {
    setTravelDate(event.target.value);
  };

  const handleSpecificRequestsChange = (event) => {
    setSpecificRequests(event.target.value);
  };

  const handleDecideForMeClick = () => {
    // Add logic to handle the button click, e.g., display recommendations based on the inputs
    console.log('You clicked "You decide for me"');
  };

  return (
    <div>
      <h2>Travel Planner</h2>
      <form>
        <label>
          How long vacation are you planning?
          <input
            type="text"
            value={vacationLength}
            onChange={handleVacationLengthChange}
          />
        </label>
        <br />
        <label>
          How much do you expect to spend?
          <input
            type="text"
            value={expectedBudget}
            onChange={handleExpectedBudgetChange}
          />
        </label>
        <br />
        <label>
          How do you describe yourself?
          <input
            type="text"
            value={selfDescription}
            onChange={handleSelfDescriptionChange}
          />
        </label>
        <br />
        <label>
          Do you have a preferred location in mind?
          <input
            type="text"
            value={preferredLocation}
            onChange={handlePreferredLocationChange}
          />
        </label>
        <br />
        <label>
          When are you expecting to travel?
          <input
            type="text"
            value={travelDate}
            onChange={handleTravelDateChange}
          />
        </label>
        <br />
        <label>
          Anything specific you would like us to take care of?
          <textarea
            value={specificRequests}
            onChange={handleSpecificRequestsChange}
          />
        </label>
        <br />
        <button onClick={handleDecideForMeClick}>You decide for me</button>
      </form>
    </div>
  );
}

export default TravelForm;
