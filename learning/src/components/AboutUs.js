import React from 'react';
import styled from 'styled-components';

const AboutUsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 2px dashed #007bff;
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.subtitleColor};
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
      <ImageContainer>
        <Image src="./Frame 58.png" alt="Graduate" />
      </ImageContainer>
      <ContentContainer>
        <Title>About Us</Title>
        <Subtitle>
          We are empowering the next generation of innovators, creators and
          designers building the future of technology in Africa
        </Subtitle>
        <InfoItem>
          <InfoTitle>What We Are</InfoTitle>
          <InfoText>
            Giseria Company will be and remain a center of higher excellence.
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>What do We do</InfoTitle>
          <InfoText>
            The mission of Giseria produce Competent careers graduates.
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>How do We help</InfoTitle>
          <InfoText>
            Offering socially academic on all programs consisting of a general education.
          </InfoText>
        </InfoItem>
      </ContentContainer>
    </AboutUsSection>
  );
};

export default AboutUs;