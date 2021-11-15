import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Nava, NavLinks } from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLinks to="/">Pokemon List</NavLinks>
        <NavLinks to="/MyPokemonList">My Pokemon List</NavLinks>
      </Nav>
    </>
  );
};

export default Navbar;
