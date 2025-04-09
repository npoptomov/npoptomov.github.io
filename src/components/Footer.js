// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  text-align: center;
  color: #fff;
  border-top: 2px solid #00d4ff;
  box-shadow: 0 -4px 20px rgba(0, 212, 255, 0.3);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SocialLink = styled(motion.a)`
  color: #00d4ff;
  margin: 0 1rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Nikola Pop Tomov</p>
      <div style={{ marginTop: '1rem' }}>
        <SocialLink
          href="https://github.com/npoptomov"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10, color: '#fff' }}
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/poptomov"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10, color: '#fff' }}
        >
          <FaLinkedin />
        </SocialLink>
      </div>
    </FooterContainer>
  );
}

export default Footer;