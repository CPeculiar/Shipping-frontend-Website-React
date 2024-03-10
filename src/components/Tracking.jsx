import React, { useState } from 'react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Track Your Shipment</h2>
      <form style={{ marginBottom: '20px' }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          Track
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {trackingInfo && (
        <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
          <h3>Tracking Information</h3>
          <p>Tracking Number: {trackingInfo.trackingNumber}</p>
          <p>Status: {trackingInfo.status}</p>
        </div>
      )}
    </div>
  );
};

export default Tracking;
