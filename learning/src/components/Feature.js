
import React from 'react';
import styled from 'styled-components';
import { FaVideo, FaUserGraduate, FaCertificate } from 'react-icons/fa'; // You'll need to install react-icons

const FeatureContainer = styled.div`
  background-color: #007bff;
  color: white;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;

  
`;


const Separator = styled.div`
  width: 1px;
  height: 50px;
  background-color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Feature = () => {
  return (
    <FeatureContainer>
      <FeatureItem>
        <Icon><FaVideo /></Icon>
        <FeatureText>Live Classes</FeatureText>
      </FeatureItem>
       <Separator />
      <FeatureItem>
        <Icon><FaUserGraduate /></Icon>
        <FeatureText>Professional Tutors</FeatureText>
      </FeatureItem>
       <Separator />
      <FeatureItem>
        <Icon><FaCertificate /></Icon>
        <FeatureText>Certifications</FeatureText>
      </FeatureItem>
    </FeatureContainer>
  );
};

export default Feature;