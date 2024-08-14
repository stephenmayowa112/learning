import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavLink from './NavLink';
import Button from './Button';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavLinks>
        <NavLink href="/maps">Maps</NavLink>
        <NavLink href="/courses">Courses</NavLink>
        <NavLink href="/product">Product</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Button primary onClick={() => console.log('Log in clicked')}>Log in</Button>
        <Button  onClick={() => console.log('Enroll Now clicked')}>Enroll Now</Button>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;