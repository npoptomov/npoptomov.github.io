// Experience.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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
  margin-bottom: 2rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
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

const ExperienceItem = styled(motion.div)`
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

const JobTitle = styled.h3`
  color: #00d4ff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Duration = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Responsibilities = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: disc;
  color: #fff;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;

function Experience() {
  const experienceData = [
    {
      company: "Synrg Software",
      role: "Software Engineer / Developer",
      duration: "Feb 2019 – Present",
      responsibilities: [
        "Designed and implemented full-stack applications using React.js, Node.js, Django, and PHP.",
        "Built and maintained REST APIs and microservices with SQL and NoSQL database support.",
        "Integrated CI/CD pipelines with Docker, Kubernetes, and Bitbucket.",
        "Deployed applications using GCP and Azure, incorporating scalable cloud architecture.",
        "Led development of AI/ML models focused on NLP with TensorFlow.",
        "Utilized TypeScript, Redux, and Webpack for performance optimization.",
      ],
    },
    {
      company: "Arizona State University",
      role: "Graduate Research Associate",
      duration: "Dec 2023 – Aug 2024",
      responsibilities: [
        "Developed Unity-based VR applications for the US Army using Java and C#.",
        "Implemented serverless solutions with AWS Lambda and GCP.",
        "Managed research data systems and documentation for academic publishing.",
      ],
    },
    {
      company: "Bellissimo Colors",
      role: "IT Specialist",
      duration: "Mar 2017 – Dec 2018",
      responsibilities: [
        "Managed software/hardware systems, user support, and training.",
        "Handled network configuration, security monitoring, and system backups.",
      ],
    },
    {
      company: "Freelance Projects",
      role: "Software Engineer / Developer",
      duration: "Oct 2010 – Present",
      responsibilities: [
        "Delivered full-stack applications using React, Node, Django, and AI tools.",
        "Developed VR/AR experiences with Unity and built ML models using Python and TensorFlow.",
        "Handled Linux system administration, network security, and API integrations.",
      ],
    },
  ];

  return (
    <ExperienceSection>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </Title>
      <Timeline>
        {experienceData.map((exp, idx) => (
          <ExperienceItem
            key={idx}
            isOdd={idx % 2 === 0}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <JobTitle>{exp.company} - {exp.role}</JobTitle>
            <Duration>{exp.duration}</Duration>
            <Responsibilities>
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </Responsibilities>
          </ExperienceItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
}

export default Experience;