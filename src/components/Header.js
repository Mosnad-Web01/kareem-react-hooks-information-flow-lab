import React from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({ onDarkModeClick }) => {
return (
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
);
};

export default Header;