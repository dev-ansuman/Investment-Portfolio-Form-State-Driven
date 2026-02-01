import React from 'react';
import Title from './Title';
import ThemeToggle from './ThemeToggler';

const Navbar: React.FC = () => {
  return (
    <header>
      <Title />
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
