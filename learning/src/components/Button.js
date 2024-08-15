// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const getSize = (size) => {
  switch (size) {
    case 'small':
      return css`
        padding: 8px 16px;
        font-size: 0.9rem;
      `;
    case 'large':
      return css`
        padding: 12px 24px;
        font-size: 1.1rem;
      `;
    default: // medium
      return css`
        padding: 10px 20px;
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button`
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  ${props => getSize(props.size)}
  
  ${props => props.primary ? css`
    background-color: #007bff;
    color: white;
    border: none;
    
    &:hover {
      background-color: #0056b3;
    }
  ` : css`
    background-color: white;
    color: #007bff;
    border: 2px solid #007bff;
    
    &:hover {
      background-color: #f8f9fa;
    }
  `}

  &:active {
    transform: scale(0.98);
  }
`;

const Button = ({ children, primary, size, onClick }) => {
  return (
    <StyledButton primary={primary} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: () => {},
};

export default Button;