import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="row col-md-12">
      <h1 className="dashboard-header">{ title === '' ? 'Build Dashboard' : title }</h1>
    </div>
  );
};

export default Header;
