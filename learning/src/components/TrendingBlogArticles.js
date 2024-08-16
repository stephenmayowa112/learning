import React from 'react';
import styled from 'styled-components';

const TrendingSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 2rem;
`;

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ArticleCard = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 1rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const ArticleAuthor = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.subtitleColor};
  margin-bottom: 1rem;
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
`;

const TrendingBlogArticles = () => {
  const articles = [
    {
      id: 1,
      title: "How to craft your resume for an entry level tech role",
      author: "Emmanuel Ani",
      image: "./Rectangle 13.png",
    },
    {
      id: 2,
      title: "Deploy your web mapping app on the web using Docker",
      author: "John Olayemi",
      image: "./Rectangle 13 (1).png",
    },
    {
      id: 3,
      title: "Craft a No-SQL backend server with python and MongoDB",
      author: "Kelechi Okoro",
      image: "./Rectangle 13 (2).png",
    },
  ];

  return (
    <TrendingSection>
      <Title>Trending blog & Articles</Title>
      <Subtitle>
        Read blogs and articles within Giseria. We share tips and tricks to get more success
      </Subtitle>
      <ArticlesContainer>
        {articles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleImage src={article.image} alt={article.title} />
            <ArticleContent>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleAuthor>{article.author}</ArticleAuthor>
              <ReadMoreButton href="#">Read More</ReadMoreButton>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesContainer>
    </TrendingSection>
  );
};

export default TrendingBlogArticles;