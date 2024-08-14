// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 40px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  ${props => props.primary ? `
    background-color: #007bff;
    color: white;
    border: none;
    
    &:hover {
      background-color: #0056b3;
    }
  ` : `
    background-color: white;
    color: #007bff;
    border: 2px solid #007bff;
    
    &:hover {
      background-color: #f8f9fa;
    }
  `}
`;

const Button = ({ children, primary, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: () => {},
};

export default Button;