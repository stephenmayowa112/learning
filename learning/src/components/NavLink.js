// src/components/NavLink.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const NavLink = ({ children, href }) => {
  return (
    <StyledNavLink href={href}>
      {children}
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;