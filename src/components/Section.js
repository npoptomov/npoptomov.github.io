import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 2rem;
`;

function Section({ title, children }) {
  return (
    <SectionContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
}

export default Section;