import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './Router';

function Header() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="form">フォーム</Link>
        <br />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default Header;
