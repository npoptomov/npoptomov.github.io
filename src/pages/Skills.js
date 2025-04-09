// Skills.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  border-radius: 15px;
  width: 220px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.6);
    border-color: #00ffa2;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 300px;
  }
`;

const SkillName = styled.h3`
  color: #00d4ff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const YearsText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Skills() {
  const skills = [
    { skill: 'React.js', years: 6 },
    { skill: 'Node.js', years: 5 },
    { skill: 'Django', years: 5 },
    { skill: 'Python', years: 8 },
    { skill: 'TensorFlow', years: 3 },
    { skill: 'AWS', years: 3 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <SkillsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <SkillName>{skill.skill}</SkillName>
            <YearsText>{skill.years} years</YearsText>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;