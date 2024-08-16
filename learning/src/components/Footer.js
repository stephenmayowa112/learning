import React from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 3rem 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex: 0 0 20%;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const LinkSection = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex: 0 0 15%;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1.4px solid #333;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1.5px solid #333;
  margin: 2rem 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Copyright = styled.p`
  color: #333;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 5rem;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 1.5rem;
  &:hover {
    color: #666;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo src="./Rectangle 9.png" alt="Giseria Logo" />
        </LogoSection>
        <LinkSection>
          <SectionTitle>Company</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#">About</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Team</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Careers</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Professional services</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Partners</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Media</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Contact</Link>
            </LinkItem>
          </LinkList>
        </LinkSection>
        <LinkSection>
          <SectionTitle>What we do</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#">GeoAI</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">GIS & Mapping</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Location Intelligence</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Geoscience</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Community Mapping</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Smart Cities</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Energy & Utilities</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Land & Water Resources</Link>
            </LinkItem>
          </LinkList>
        </LinkSection>
        <LinkSection>
          <SectionTitle>Products</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#">Apps</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Solutions</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Request a Demo</Link>
            </LinkItem>
          </LinkList>
        </LinkSection>
        <LinkSection>
          <SectionTitle>Community</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#">Maps</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Developers</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Join Our Discord</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Volunteer</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Events</Link>
            </LinkItem>
          </LinkList>
        </LinkSection>
        <LinkSection>
          <SectionTitle>Resources</SectionTitle>
          <LinkList>
            <LinkItem>
              <Link href="#">Training</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Guides</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Developer Hub</Link>
            </LinkItem>
            <LinkItem>
              <Link href="#">Startups</Link>
            </LinkItem>
          </LinkList>
        </LinkSection>
      </FooterContent>
      <Divider />
      <BottomSection>
        <Copyright>© Copyright 2023, All Rights Reserved</Copyright>
        <SocialIcons>
          <SocialIcon href="#" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialIcons>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
