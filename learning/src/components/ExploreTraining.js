// src/components/ExploreTraining.js
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const ExploreContainer = styled.section`
  padding: 1em 2rem;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 2rem;
  /* margin-top: 1rem; */
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 90%;
  max-width: 500px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.textColor};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 1.5rem;
  padding:5px, 15px;
  text-align: center;
`;

const ExploreTraining = () => {
  return (
    <ExploreContainer>
      <Title>Explore professional training & certifications</Title>
      <CardContainer>
        <Card>
          <CardImage src="/girl_1.png" alt="Individual learning" />
          <CardContent>
            <CardTitle>For individuals</CardTitle>
            <CardDescription>
              Do you want to get started making maps and apps, apply advanced analysis tools, or
              automate your GIS workflows? We've got you covered with hundreds of options on those
              topics and dozens more.
            </CardDescription>
            <CardDescription>
                <Button size="large" >Become a Member</Button>
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardImage src="/girl_1.png" alt="Organization learning" />
          <CardContent>
            <CardTitle>For Organizations</CardTitle>
            <CardDescription>
              Do you want to get started making maps and apps, apply advanced analysis tools, or
              automate your GIS workflows? We've got you covered with hundreds of options on those
              topics and dozens more.
            </CardDescription>
            <CardDescription>
                <Button size="large">Become a Member</Button>
            </CardDescription>
            
          </CardContent>
        </Card>
      </CardContainer>
    </ExploreContainer>
  );
};

export default ExploreTraining;