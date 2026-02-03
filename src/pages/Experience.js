// /mnt/data/Experience.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(
    circle at center,
    rgba(0, 212, 255, 0.1) 0%,
    transparent 70%
  );

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
    content: "";
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
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #00d4ff;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px #00d4ff;
    ${({ isOdd }) => (isOdd ? "right: -6px;" : "left: -6px;")}
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
      company: "KB-Synotec",
      role: "Senior Software Engineer",
      duration: "Sep 2023 – Present",
      responsibilities: [
        "Leading development of cross-platform applications using React, React Native, and TypeScript.",
        "Designing and maintaining backend services with Node.js and Express.",
        "Planning system architecture and managing relational and non-relational databases.",
        "Implementing Microsoft Graph and OneDrive Delta API integrations for secure synchronization.",
        "Working with Azure and Microsoft 365 services.",
        "Managing CI/CD and code quality processes in GitLab, using ESLint, Prettier, Husky, and automated pipelines.",
        "Contributing to SharePoint and Planner integrations for document management and team workflows.",
        "Collaborating in agile teams to deliver scalable, maintainable solutions.",
      ],
    },
    {
      company: "Synrg Software",
      role: "Software Engineer",
      duration: "Feb 2019 – Aug 2023",
      responsibilities: [
        "Built full-stack applications with React, Node.js, Django, and MySQL.",
        "Developed microservices and REST APIs to support scalable architectures.",
        "Managed CI/CD pipelines using Docker, Kubernetes, and Bitbucket.",
        "Deployed applications using GCP and Azure.",
        "Led AI and machine learning solutions focusing on NLP, LLMs, and production delivery.",
        "Optimized frontend performance using TypeScript, Redux, and Webpack.",
        "Delivered containerized deployments across multiple environments.",
      ],
    },
    {
      company: "Arizona State University",
      role: "Graduate Researcher and Software Engineer",
      duration: "Dec 2023 – Aug 2024",
      responsibilities: [
        "Developed VR applications in Unity and Java for research, training, and simulation environments with academic and government partners.",
        "Contributed to a VR-based event tracking and real-time data processing system for training analysis and performance evaluation (STEEL-R).",
        "Integrated Unity-based simulations with backend event processing and analytics pipelines.",
        "Implemented serverless infrastructures using AWS Lambda and GCP services to support scalable research platforms.",
        "Produced technical documentation and research reports, and presented results at academic events.",
        "Supported onboarding and training of users and research staff.",
      ],
    },
    {
      company: "Bellissimo Colors",
      role: "IT Specialist",
      duration: "Mar 2017 – Dec 2018",
      responsibilities: [
        "Provided user support for hardware and software systems.",
        "Managed network configuration, maintenance, and security.",
        "Monitored systems and implemented preventive security measures.",
        "Oversaw backup procedures and data management processes.",
      ],
    },
    {
      company: "Freelance Projects",
      role: "Software Developer",
      duration: "Oct 2010 – Present",
      responsibilities: [
        "Delivered full-stack and cloud-based solutions for international clients using React, Node.js, Python, Django, and modern cloud platforms.",
        "Designed and developed CEIQX, a GenAI-powered enterprise chatbot leveraging LLMs and OpenAI APIs for intelligent access to internal company knowledge.",
        "Built and maintained Calorie Copilot, a production-ready AI mobile app for iOS and Android using React Native and Node.js for conversational meal tracking and nutritional analysis.",
        "Developed AR and VR applications in Unity, including real-time body segmentation and immersive architecture visualization tools.",
        "Created cross-platform desktop apps with Electron, plus mobile apps using Flutter and Firebase.",
        "Implemented backend systems for commercial platforms including REST APIs, payment integrations, and cloud deployments on AWS and Azure.",
        "Provided Linux system administration, server setup, security hardening, documentation, and long-term maintenance.",
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
            <JobTitle>
              {exp.company} - {exp.role}
            </JobTitle>
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
