// src/components/PopularCourses.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";

const Section = styled.section`
  padding: 2rem;
  background-color: #f0f8ff; // Light blue background
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 2rem;
  text-align: flex;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 1.2rem 1rem;
  font-size: 1.2rem;
  border: 3px solid;
  border-color: #666;
  border-radius: 4px;
  margin-right: 2rem;
  flex-grow: 1;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 30px;
  border-radius: 9px;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CourseCard = styled.div`
  background-color: white;
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

const CourseTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0.5rem;
`;

const CourseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const InstructorPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CourseInstructor = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.subtitleColor};
`;

const CoursePrice = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
`;

const CourseRating = styled.div`
  color: #ffc107;
  font-size: 0.8rem;
`;

const Certificate = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.subtitleColor};
  margin-top: 0.5rem;
`;

const ExploreButton = styled(Button)`
  display: block;
  margin: 0 auto;
  padding: 40px 0px;
`;

const PopularCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      name: "ArcGIS Desktop Fundamentals",
      instructor: "Giseria Training",
      price: 500,
      rating: 5,
      image: "./Rectangle 6.png",
    },
    {
      id: 2,
      name: "Building Web Apps with React",
      instructor: "Emmanuel Ani",
      price: 250,
      rating: 5,
      image: "./Rectangle 6 (1).png",
    },
    {
      id: 3,
      name: "Designing Mobile Apps with Figma",
      instructor: "Peace Oluwole",
      price: 300,
      rating: 5,
      image: "./Rectangle 6 (2).png",
    },
  ];

  return (
    <Section>
      <>
        <Title>Our Popular Courses</Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="What would you like to learn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton primary>
            <span>
              <CiSearch />
            </span>
          </SearchButton>
        </SearchContainer>
        <TagContainer>
          <Tag>ArcGIS</Tag>
          <Tag>Technology</Tag>
        </TagContainer>
      </>
      <CourseGrid>
        {courses.map((course) => (
          <CourseCard key={course.id}>
            <CourseImage src={course.image} alt={course.name} />

            <CourseInfo>
              <CourseTitle>{course.name}</CourseTitle>
              <CourseDetails>
                <InstructorPrice>
                  <CourseInstructor>{course.instructor}</CourseInstructor>
                  <CoursePrice>${course.price}</CoursePrice>
                </InstructorPrice>
                <CourseRating>
                  {course.rating}.0 {"★".repeat(course.rating)}
                </CourseRating>
              </CourseDetails>
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
