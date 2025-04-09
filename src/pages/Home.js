// Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';

// Cursor animation style
const Cursor = styled.span`
  display: inline-block;
  width: 4px;  /* Width of the cursor */
  height: 3.5rem;  /* Height of the cursor to match the text height */
  background-color: ${({ color }) => color || '#00d4ff'}; /* Dynamic color based on props */
  animation: blink 1s step-start infinite;
  margin-left: 5px;  /* Space between the cursor and the text */
  position: relative;
  top: 0.5rem; /* Fine-tune to match the text vertically */
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

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
  const [cursorColor, setCursorColor] = useState('#00d4ff'); // Initial color

  useEffect(() => {
    // Function to pick a random color from the predefined set
    const pickRandomColor = () => {
      const colors = ['#00d4ff', '#00ffa2', '#ff00ff'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    // Set interval to change cursor color every blink (1 second)
    const interval = setInterval(() => {
      setCursorColor(pickRandomColor());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
              "Next-Gen Creator",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          <Cursor color={cursorColor} />
        </Tagline>
      </Tilt>
      <Subtitle>Building the future with code and creativity</Subtitle>
    </Hero>
  );
}

export default Home;
