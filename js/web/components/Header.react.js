import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="header row col-md-12">
      <h1 className="header__title">{ title === '' ? 'Build Dashboard' : title }</h1>
    </div>
  );
};

export default Header;
