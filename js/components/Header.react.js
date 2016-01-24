import React from 'react';

const Header = ({ header }) => {
  return (
    <div className="row col-md-12">
      <h1 className="dashboard-header">{ header === '' ? 'Build Dashboard' : header }</h1>
    </div>
  );
};

export default Header;
