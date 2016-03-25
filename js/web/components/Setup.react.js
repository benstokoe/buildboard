import React from 'react';

const Setup = ({ onTokenEnter }) => (
  <div className="setup">
    <p className="setup__circle-token">Enter your circle token:</p>
    <input
      className="setup__circle-token-input"
      onKeyPress={ (e) => {
        e.key === 'Enter' ? onTokenEnter(e.target.value) : null;
      }}
    />

    <div className="setup__info">
      <p>To use this dashboard you will need a Circle CI token</p>
      <p>You can get this from API Tokens under Account Settings</p>
    </div>
  </div>
);

export default Setup;
