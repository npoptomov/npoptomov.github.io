import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 15px;
  margin: 1rem;
  width: 220px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
  }
`;


const SkillName = styled.h3`
  color: #00d4ff;
`;

function SkillCard({ skill, years }) {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <SkillName>{skill}</SkillName>
      <p>{years} years</p>
    </Card>
  );
}

export default SkillCard;