// src/components/SingleTrain.js
import React from 'react';

function SingleTrain({ train }) {
  return (
    <div>
      <h2>Train {train.name}</h2>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
    </div>
  );
}

export default SingleTrain;