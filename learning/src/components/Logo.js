import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div
`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const LogoImage = styled.img
`
  width: 148px;
  height: 52px;
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src='/gisera_logo.png' alt="Giseria Logo" />
      
    </LogoWrapper>
  );
};

export default Logo;