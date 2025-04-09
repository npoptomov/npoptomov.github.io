import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfilePic from '../1707452033555.jpg'; // Adjust path if needed

const AboutSection = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 2rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
  letter-spacing: 1px;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.6);
    border-color: #00ffa2;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  border: 2px solid #00d4ff;
  object-fit: cover;
`;

const BioText = styled(motion.p)`
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.8;
  text-align: left;
`;

const Highlight = styled.span`
  color: #00d4ff;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
`;

const SkillTag = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(90deg, #00d4ff, #00ffa2);
  color: #fff;
  padding: 0.3rem 0.8rem;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

function About() {
  const bioVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <AboutSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </Title>
      <ContentWrapper
        initial="hidden"
        animate="visible"
        variants={bioVariants}
      >
        <ProfileImage
          src={ProfilePic}
          alt="Nikola Pop Tomov"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
        <BioText>
          I’m an <Highlight>experienced Software Engineer</Highlight> with over <Highlight>10 years</Highlight> of expertise in <Highlight>full-stack development</Highlight>, <Highlight>AI engineering</Highlight>, and <Highlight>system design</Highlight>. I specialize in crafting scalable solutions using modern tools like <Highlight>React.js</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Django</Highlight>, and <Highlight>PHP</Highlight>. My work revolves around <Highlight>REST APIs</Highlight>, <Highlight>microservices architecture</Highlight>, and <Highlight>cloud technologies</Highlight>, with a strong foundation in database management (<Highlight>SQL</Highlight> and <Highlight>NoSQL</Highlight>) and <Highlight>CI/CD pipelines</Highlight>.
          <br /><br />
          I’m passionate about <Highlight>AI and machine learning</Highlight>, particularly <Highlight>NLP</Highlight> with <Highlight>TensorFlow</Highlight>, and I thrive on solving complex problems with creativity and precision. Known for my <Highlight>effective communication</Highlight> and deep understanding of <Highlight>design patterns</Highlight>, I’m eager to contribute to <Highlight>cutting-edge projects</Highlight> in a dynamic, agile environment.
        </BioText>
        <div>
          <SkillTag variants={tagVariants}>Full-Stack Development</SkillTag>
          <SkillTag variants={tagVariants}>AI & ML</SkillTag>
          <SkillTag variants={tagVariants}>Cloud Architecture</SkillTag>
          <SkillTag variants={tagVariants}>Problem Solving</SkillTag>
        </div>
      </ContentWrapper>
    </AboutSection>
  );
}

export default About;