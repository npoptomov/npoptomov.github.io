// Home.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';

const Hero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 1rem;
  }
`;

const Tagline = styled.h1`
  font-size: 4.5rem;
  background: linear-gradient(90deg, #00d4ff, #00ffa2, #ff00ff);
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: gradientMove 4s linear infinite;
  margin-bottom: 1rem;

  @keyframes gradientMove {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

function Home() {
  return (
    <Hero
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Tilt options={{ max: 15, scale: 1.05, speed: 300 }}>
        <Tagline>
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "AI Innovator",
              2000,
              "Full-Stack Developer",
              2000,
              "Future Builder",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </Tagline>
      </Tilt>
      <Subtitle>Building the future with code and creativity</Subtitle>
    </Hero>
  );
}

export default Home;