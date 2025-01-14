// src/components/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <img 
        src="/logo.JPG" 
        alt="RecipeApp Logo" 
        style={{
          height: '140px',
          marginBottom: '20px',
          marginLeft: '400px', 
          transition: 'filter 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'drop-shadow(0 0 2em #646cffaa)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = '';
        }}
      />
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li><Link to="/" className={classes.navItem}>Home</Link></li>
          <li><Link to="/about" className={classes.navItem}>About</Link></li>
          <li><Link to="/recipes" className={classes.navItem}>Recipes</Link></li>
          <li><Link to="/start" className={classes.navItem}>Start Here</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
