// Extras.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExtrasSection = styled(motion.section)`
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
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CategoryContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem auto;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(0, 212, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ItemCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  text-align: left;
  margin: 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
    border-color: #00ffa2;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ItemTitle = styled.h4`
  color: #00d4ff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ItemText = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin: 0.3rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const List = styled.ul`
  padding-left: 1.5rem;
  list-style: disc;
  color: #fff;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
`;

function Extras() {
  const extrasData = {
    certifications: [
      { title: "Advanced React", issuer: "Meta Platforms, Inc.", credential: "BWSY8GLUKP88" },
      { title: "HTML and CSS in-depth", issuer: "Meta Platforms, Inc.", credential: "3ZZFTCQWGGAF" },
      { title: "Programming with JavaScript", issuer: "Meta Platforms, Inc.", credential: "6QFZDJ5U6KG8" },
      { title: "Version Control", issuer: "Meta Platforms, Inc.", credential: "4EKCP6UTHCS7" },
    ],
    publications: [
      { 
        title: "Deep Learning-Based Real-Time Body Measurements Using Device Camera", 
        authors: "N. Pop Tomov, V. Kokalanov, and S. Koceski", 
        publication: "Proceedings of the Mediterranean Embedded Computing Resources (MECO) Conference, 2023" 
      },
      { 
        title: "Investigating the effectiveness of GPT-based code generation for software engineering tasks", 
        authors: "N. Pop Tomov and A. Krstev", 
        publication: "Balkan Journal of Applied Mathematics and Informatics (BJAMI), 2023" 
      },
      { 
        title: "Real-Time Estimation of Human Body Dimensions with Deep Learning", 
        authors: "N. Pop Tomov, V. Kokalanov, and S. Koceski", 
        publication: "Balkan Journal of Applied Mathematics and Informatics (BJAMI), 2023" 
      },
      { 
        title: "The Use of Augmented Reality in Geometry Teaching", 
        authors: "N. Pop Tomov, N. Koceska, and S. Koceski", 
        publication: "Proceedings of the International Conference 'Information Technology and Education Development' (ITRO), 2022" 
      },
    ],
    awards: [
      { title: "Best Website Award", issuer: "MASSUM.org", description: "Ranked first in the category for the best website selection" },
      { title: "Best Website Award", issuer: "Municipality of Stip", description: "Ranked first in the category for the best website selection" },
      { title: "Best Short Film Award", issuer: "MASSUM.org", description: "Won first place for the best short movies about global air pollution" },
    ],
    professionalTraining: [
      { title: "Augmented Reality and its Uses", type: "Education & Training", organizer: "University of Kansas" },
      { title: "Application of Machine Learning in Education", type: "Seminar", organizer: "University of Kansas" },
    ],
    softSkills: [
      "Leadership", "Communication Skills", "Creativity", "Self-motivation", "Critical Thinking",
      "Problem-solving", "Decision-making", "Multitasking", "Strategic Thinking", "Cultural Awareness"
    ],
    volunteering: [
      { role: "Volunteer Activist & Project Leader", organization: "American Corner" },
      { role: "Scout Squad Member", organization: "IO Ekvinoks" },
    ],
    languages: [
      { language: "English", level: "Fluent" },
      { language: "Macedonian", level: "Native" },
      { language: "Slovenian", level: "Intermediate" },
      { language: "Croatian", level: "Proficient" },
      { language: "Serbian", level: "Fluent" },
      { language: "Bulgarian", level: "Proficient" },
    ],
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <ExtrasSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Additional Information
      </Title>

      {/* Certifications */}
      <CategoryContainer>
        <CategoryTitle>Certifications</CategoryTitle>
        {extrasData.certifications.map((cert, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{cert.title}</ItemTitle>
            <ItemText>Issued by: {cert.issuer}</ItemText>
            <ItemText>Credential ID: {cert.credential}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>

      {/* Publications */}
      <CategoryContainer>
        <CategoryTitle>Publications</CategoryTitle>
        {extrasData.publications.map((pub, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{pub.title}</ItemTitle>
            <ItemText>Authors: {pub.authors}</ItemText>
            <ItemText>{pub.publication}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>

      {/* Awards */}
      <CategoryContainer>
        <CategoryTitle>Awards</CategoryTitle>
        {extrasData.awards.map((award, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{award.title}</ItemTitle>
            <ItemText>Issued by: {award.issuer}</ItemText>
            <ItemText>{award.description}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>

      {/* Professional Training */}
      <CategoryContainer>
        <CategoryTitle>Professional Training</CategoryTitle>
        {extrasData.professionalTraining.map((training, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{training.title}</ItemTitle>
            <ItemText>{training.type}</ItemText>
            <ItemText>Organized by: {training.organizer}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>

      {/* Soft Skills */}
      <CategoryContainer>
        <CategoryTitle>Soft Skills</CategoryTitle>
        <ItemCard initial="hidden" animate="visible" variants={itemVariants}>
          <List>
            {extrasData.softSkills.map((skill, idx) => (
              <ListItem key={idx}>{skill}</ListItem>
            ))}
          </List>
        </ItemCard>
      </CategoryContainer>

      {/* Volunteering */}
      <CategoryContainer>
        <CategoryTitle>Volunteering</CategoryTitle>
        {extrasData.volunteering.map((vol, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{vol.role}</ItemTitle>
            <ItemText>{vol.organization}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>

      {/* Languages */}
      <CategoryContainer>
        <CategoryTitle>Languages</CategoryTitle>
        {extrasData.languages.map((lang, idx) => (
          <ItemCard key={idx} custom={idx} initial="hidden" animate="visible" variants={itemVariants}>
            <ItemTitle>{lang.language}</ItemTitle>
            <ItemText>{lang.level}</ItemText>
          </ItemCard>
        ))}
      </CategoryContainer>
    </ExtrasSection>
  );
}

export default Extras;