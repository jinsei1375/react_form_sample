import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <br />
      <Link to="form">フォーム</Link>
      <br />
    </header>
  );
}

export default Header;
