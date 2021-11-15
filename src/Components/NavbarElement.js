import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/*---------------------------------------------------LOWER NAV---------------------------------------------------*/

export const Nav = styled.nav`
  background: #ff4236;
  display: flex;
  position: sticky;
  top: -5px;
  margin: 0;
  z-index: 10;
  box-shadow: 0 37px 37px -4px rgba(0, 0, 0, 0.02);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Nava = styled.a`
  float: left;
  display: block;
  color: #333;
  text-align: center;
  padding: 20px 26px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  float: left;
  text-decoration: none;
  padding: 20px 26px;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
`;

export const NavForm = styled.form`
  position: absolute;
  right: 0;
  height: 100%;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 2000px;
`;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (min-width: 1260px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
    padding: 0px;
  }
`;

// export const NavLinks = styled(Link)`
//   color: #000;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   font-size: 1.25rem;
//   cursor: pointer;
//   transition: all 0.1s ease-in-out;

//   &:hover {
//     transition: all 0.1s ease-in-out;
//     color: #000;
//     border-bottom: 5px solid #000;
//   }
// `;

/*---------------------------------------------------END OF LOWER NAV---------------------------------------------------*/
