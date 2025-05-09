import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Modified styled components with new additions
const SkillsSection = styled(motion.section)`
  padding: 4rem 2rem 6rem 2rem; 
  text-align: center;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem 6rem 1rem;
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

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: rgba(0, 212, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 212, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Chevron = styled(motion.span)`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  display: inline-block;
`;

const SkillsGrid = styled(motion.div)`
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

const SkillName = styled.h4`
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
  const [openCategories, setOpenCategories] = useState({});

  const skills = [
    {
      category: 'Frontend Development',
      skills: [
        { skill: 'HTML', years: 14 },
        { skill: 'CSS', years: 14 },
        { skill: 'JavaScript', years: 14 },
        { skill: 'React.js', years: 6 },
        { skill: 'TypeScript', years: 6 },
        { skill: 'Redux', years: 6 },
        { skill: 'State Management', years: 6 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { skill: 'Node.js', years: 6 },
        { skill: 'Django', years: 6 },
        { skill: 'Flask', years: 3 },
        { skill: 'APIs', years: 8 },
        { skill: 'REST APIs', years: 6 },
        { skill: 'GraphQL', years: 3 },
        { skill: 'SQL (MySQL, PostgreSQL)', years: 6 },
        { skill: 'NoSQL (MongoDB)', years: 6 },
        { skill: 'Firebase', years: 3 },
      ],
    },
    {
      category: 'Mobile Development',
      skills: [
        { skill: 'React Native', years: 4 },
        { skill: 'Unity', years: 3 },
        { skill: 'Flutter', years: 2 },
        { skill: 'AR/VR Development', years: 2 },
      ],
    },
    {
      category: 'Cloud Technologies',
      skills: [
        { skill: 'Google Cloud (GCP)', years: 4 },
        { skill: 'Azure', years: 3 },
        { skill: 'AWS', years: 3 },
        { skill: 'Lambda Functions', years: 3 },
        { skill: 'Serverless Technologies', years: 5 },
        { skill: 'Docker', years: 6 },
        { skill: 'Kubernetes', years: 3 },
        { skill: 'Bitbucket', years: 6 },
        { skill: 'CI/CD', years: 6 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { skill: 'Microservices', years: 6 },
        { skill: 'Web Services', years: 6 },
        { skill: 'XML', years: 8 },
        { skill: 'JSON', years: 8 },
        { skill: 'Web3', years: 3 },
        { skill: 'MVC Architecture', years: 6 },
        { skill: 'Wordpress', years: 6 },
      ],
    },
    {
      category: 'AI/ML Development',
      skills: [
        { skill: 'Python', years: 10 },
        { skill: 'Machine Learning', years: 4 },
        { skill: 'NLP', years: 3 },
        { skill: 'LLMs', years: 3 },
        { skill: 'TensorFlow', years: 3 },
      ],
    },
    {
      category: 'System Development and Maintenance',
      skills: [
        { skill: 'Java', years: 3 },
        { skill: 'C#', years: 3 },
        { skill: 'Linux', years: 8 },
        { skill: 'Unix', years: 8 },
        { skill: 'Shell Scripting', years: 3 },
        { skill: 'Network Security', years: 5 },
      ],
    },
    {
      category: 'Software Quality Assurance',
      skills: [
        { skill: 'Cypress', years: 6 },
        { skill: 'Selenium', years: 6 },
        { skill: 'Automation Testing', years: 6 },
      ],
    },
    {
      category: 'Other Technologies',
      skills: [
        { skill: 'Version Control (Git)', years: 10 },
        { skill: 'Electron.js', years: 2 },
        { skill: 'Payment Gateways', years: 4 },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  const gridVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
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
      {skills.map((category, index) => (
        <div key={index}>
          <CategoryContainer>
            <CategoryTitle 
              onClick={() => toggleCategory(category.category)}
            >
              {category.category}
              <Chevron
                variants={chevronVariants}
                animate={openCategories[category.category] ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              >
                ▼
              </Chevron>
            </CategoryTitle>
          </CategoryContainer>
          <SkillsGrid
            variants={gridVariants}
            initial="hidden"
            animate={openCategories[category.category] ? "visible" : "hidden"}
          >
            {openCategories[category.category] && category.skills.map((skill, i) => (
              <SkillCard
                key={i}
                custom={i}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <SkillName>{skill.skill}</SkillName>
                <YearsText>{skill.years} years</YearsText>
              </SkillCard>
            ))}
          </SkillsGrid>
        </div>
      ))}
    </SkillsSection>
  );
}

export default Skills;