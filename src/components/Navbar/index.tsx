import React from 'react';
import Title from './Title';
import ThemeToggle from './theme-toggler';

const Navbar: React.FC = () => {
  return (
    <header>
      <Title />
      <ThemeToggle/>
    </header>
  );
};

export default Navbar;
