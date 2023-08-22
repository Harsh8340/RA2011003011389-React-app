// src/components/TrainsList.js
import React, { useEffect, useState } from 'react';
import { fetchTrains } from './api.js';

function TrainsList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains().then(data => setTrains(data));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Price</th>
            <th>Seat Availability</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.price}</td>
              <td>{train.seatAvailability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainsList;