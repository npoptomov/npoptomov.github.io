// Education.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);

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

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background: linear-gradient(to bottom, #00d4ff, #00ffa2);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    &::before {
      left: 10px;
    }
  }
`;

const EducationItem = styled(motion.div)`
  position: relative;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  text-align: left;
  width: 45%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
    border-color: #00ffa2;
  }

  &:nth-child(odd) {
    margin-left: 0;
    margin-right: auto;
  }
  &:nth-child(even) {
    margin-left: auto;
    margin-right: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #00d4ff;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px #00d4ff;
    ${({ isOdd }) => (isOdd ? 'right: -6px;' : 'left: -6px;')}
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 2rem auto;
    padding: 1rem;

    &:nth-child(odd),
    &:nth-child(even) {
      margin-left: 20px;
      margin-right: 0;
    }

    &::before {
      left: -20px;
    }
  }
`;

const School = styled.h3`
  color: #00d4ff;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Degree = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin: 0.3rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Education() {
  const educationData = [
    {
      institution: "Arizona State University",
      degree: "Doctoral Degree in Computer Science",
      duration: "Jan 2024 – Present",
    },
    {
      institution: "Goce Delchev University Stip",
      degree: "Master’s Degree in Computer Science, Software Engineering",
      duration: "Oct 2021 – Oct 2023",
    },
    {
      institution: "Goce Delchev University Stip",
      degree: "Bachelor’s Degree in Computer Science, Computer Engineering",
      duration: "Sep 2018 – Jun 2021",
    },
    {
      institution: "University of Kansas",
      degree: "Exchange Program in Computer Science, Computer Engineering",
      duration: "Aug 2017 – Jul 2018",
    },
    {
      institution: "University of Ljubljana",
      degree: "Completed Courses in Computer Science, Computer Engineering",
      duration: "Oct 2016 – Jun 2017",
    },
  ];

  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </Title>
      <Timeline>
        {educationData.map((edu, idx) => (
          <EducationItem
            key={idx}
            isOdd={idx % 2 === 0}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <School>{edu.institution}</School>
            <Degree>{edu.degree}</Degree>
            <Duration>{edu.duration}</Duration>
          </EducationItem>
        ))}
      </Timeline>
    </SectionContainer>
  );
}

export default Education;