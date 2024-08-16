// src/components/PopularCourses.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 2rem;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  margin-right: 1rem;
  flex-grow: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const SearchButton = styled(Button)`
  padding: 0.5rem 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const CourseCard = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseInfo = styled.div`
  padding: 1rem;
`;

const CourseName = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.textColor};
  margin-bottom: 0.5rem;
`;

const CourseInstructor = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 0.5rem;
`;

const CoursePrice = styled.span`
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

const CourseRating = styled.div`
  color: ${props => props.theme.starColor};
`;

const Certificate = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.subtitleColor};
  margin-top: 0.5rem;
`;

const ExploreButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;



const PopularCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      name: 'ArcGIS Desktop Fundamentals',
      instructor: 'Giseria Training',
      price: 500,
      rating: 5,
      image: './Rectangle 6.png',
    },
    {
      id: 2,
      name: 'Building Web Apps with React',
      instructor: 'Emmanuel Ani',
      price: 250,
      rating: 5,
      image: './Rectangle 6 (1).png',
    },
    {
      id: 3,
      name: 'Designing Mobile Apps with Figma',
      instructor: 'Peace Oluwole',
      price: 300,
      rating: 5,
      image: './Rectangle 6 (2).png',
    },
  ];

  return (
    <Section>
      <Title>Our Popular Courses</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="What would you like to learn..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton primary>
          <span role="img" aria-label="search">🔍</span>
        </SearchButton>
      </SearchContainer>
      <TagContainer>
        <Tag>ArcGIS</Tag>
        <Tag>Technology</Tag>
      </TagContainer>
      <CourseGrid>
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <CourseImage src={course.image} alt={course.name} />
            <CourseInfo>
              <CourseName>{course.name}</CourseName>
              <CourseInstructor>{course.instructor}</CourseInstructor>
              <CoursePrice>${course.price}</CoursePrice>
              <CourseRating>{course.rating}.0{'★'.repeat(course.rating)} </CourseRating>
              <Certificate>Professional Certificate</Certificate>
            </CourseInfo>
          </CourseCard>
        ))}
      </CourseGrid>
      <ExploreButton primary>Explore All courses →</ExploreButton>
    </Section>
  );
};

export default PopularCourses;