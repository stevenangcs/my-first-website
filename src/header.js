import React from 'react';

function Header() {
  return (
    <header>
      <h1>My React Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">My Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;