import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import {
  Nav,
  Nava,
  // NavbarContainer,
  // MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  DrawerWrapper,
} from './NavbarElement';
// import { SidebarData } from '../../Datas/sidebar';

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <div>Pokemon</div> */}
        <NavLinks to="/">Pokemon List</NavLinks>
        <NavLinks to="/MyPokemonList">My Pokemon List</NavLinks>
        {/* <Nava></Nava>
        <Nava></Nava> */}
      </Nav>
      {/* <div style={{ alignItems: 'center' }} className="Navbar">
        <div>Pokemon</div>
        <a>
          <Link to="/">Pokemon List</Link>
        </a>
        <a>
          <Link to="/MyPokemonList">My Pokemon List</Link>
        </a>
      </div> */}
    </>
  );
};

export default Navbar;
