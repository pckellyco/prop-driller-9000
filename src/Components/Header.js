import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
