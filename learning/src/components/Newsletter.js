import React, { useState } from 'react';
import styled from 'styled-components';

const NewsletterSection = styled.section`
  background-color: #FFF0F5; // Light pink background
  padding: 5rem 1rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1.4px solid  #007bff;
  border-radius: 4px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1.9rem 3.3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the newsletter subscription here
    console.log('Subscribing email:', email);
    // Reset the input field
    setEmail('');
  };

  return (
    <NewsletterSection>
      <Container>
        <Title>Get news and updates from Giseria sent to your inbox</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email...."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Subscribe</Button>
        </Form>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter;