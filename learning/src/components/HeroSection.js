// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 60%;
  padding-bottom: 10%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.4rem;
  background-image: url('/image.png');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.subtitleColor};
`;

const Image = styled.img`
  max-width: 56%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>Powering the next big ideas in technology</Title>
        <Subtitle>
          Explore courses from our curated authors with professional expertise 
          and industry best practices across a wide range technology fields.
        </Subtitle>
        <Button size="large" primary>Get Started →</Button>
      </ContentWrapper>
      <Image src="/girl_1.png" alt="Student with books" />
    </HeroContainer>
  );
};

export default HeroSection;