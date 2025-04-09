import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #00d4ff;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
  letter-spacing: 1px;
`;

const ContactCard = styled(motion.div)`
  max-width: 600px;
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

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  font-size: 1.2rem;
  color: #fff;
`;

const IconWrapper = styled.span`
  margin-right: 1rem;
  color: #00d4ff;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    color: #00ffa2;
    transform: scale(1.2);
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
  }
`;

const ContactLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
  }
`;

const ContactText = styled.p`
  color: #fff;
  margin: 0;
`;

function Contact() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <ContactSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </Title>
      <ContactCard
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <ContactItem custom={0} initial="hidden" animate="visible" variants={itemVariants}>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <ContactLink href="mailto:npoptomov@gmail.com">npoptomov@gmail.com</ContactLink>
        </ContactItem>
        <ContactItem custom={1} initial="hidden" animate="visible" variants={itemVariants}>
          <IconWrapper><FaPhone /></IconWrapper>
          <ContactLink href="tel:+15612983132">(561) 298-3132</ContactLink>
        </ContactItem>
        <ContactItem custom={2} initial="hidden" animate="visible" variants={itemVariants}>
          <IconWrapper><FaGithub /></IconWrapper>
          <ContactLink href="https://github.com/npoptomov" target="_blank" rel="noopener noreferrer">
            github.com/npoptomov
          </ContactLink>
        </ContactItem>
        <ContactItem custom={3} initial="hidden" animate="visible" variants={itemVariants}>
          <IconWrapper><FaLinkedin /></IconWrapper>
          <ContactLink href="https://www.linkedin.com/in/poptomov" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/poptomov
          </ContactLink>
        </ContactItem>
        <ContactItem custom={4} initial="hidden" animate="visible" variants={itemVariants}>
          <IconWrapper><FaMapMarkerAlt /></IconWrapper>
          <ContactText>Boca Raton, FL 33433</ContactText>
        </ContactItem>
      </ContactCard>
    </ContactSection>
  );
}

export default Contact;