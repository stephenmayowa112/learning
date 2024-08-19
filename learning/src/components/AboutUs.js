import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.2rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  max-width: 500px;
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  /* border: 2px dashed #007bff; */
  border-radius: 10px;
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  width: 50%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-left: 2rem;
`;

const CheckIcon = styled(FaCheckCircle)`
  color: #007bff;
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
      <Title>About Us</Title>
      <Subtitle>
        We are empowering the next generation of innovators, creators and
        designers building the future of technology in Africa
      </Subtitle>
      <ContentWrapper>
        <ImageContainer>
          <Image src="./Frame 58.png" alt="Graduate" />
        </ImageContainer>
        <InfoContainer>
          <InfoItem>
            <InfoTitle>
              <CheckIcon />
              What We Are
            </InfoTitle>
            <InfoText>
              Giseria Company will be and remain a center of higher excellence.
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>
              <CheckIcon />
              What do We do
            </InfoTitle>
            <InfoText>
              The mission of Giseria produce Competent careers graduates.
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoTitle>
              <CheckIcon />
              How do We help
            </InfoTitle>
            <InfoText>
              Offering socially academic on all programs consisting of a general education.
            </InfoText>
          </InfoItem>
        </InfoContainer>
      </ContentWrapper>
    </AboutUsSection>
  );
};

export default AboutUs;