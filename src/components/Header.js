// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ProfilePic from '../1707452033555.jpg';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.2);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  margin: 0 1.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background: linear-gradient(90deg, #00d4ff, #00ffa2);
    transition: width 0.4s ease-in-out;
    position: absolute;
    bottom: -6px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  }
`;

const Logo = styled(motion.h1)`
  font-size: 2rem;
  color: #00d4ff;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  border: 2px solid #00d4ff;
`;

const NavMenu = styled(motion.div)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    justify-content: center;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 212, 255, 0.3);
  }

  @media (min-width: 769px) {
    flex-direction: row;
    position: static;
    height: auto;
    width: auto;
    background: none;
    box-shadow: none;
  }
`;

const Overlay = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
`;

const Hamburger = styled(motion.div)`
  display: none;
  color: #00d4ff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const menuVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 100,
    },
  },
};

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const overlayVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const iconVariants = {
  closed: {
    rotate: 0,
    scale: 1,
  },
  open: {
    rotate: 90,
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // ensure menu is closed on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={ProfilePic} alt="Avatar" />
        <Logo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Nikola Pop Tomov
        </Logo>
      </div>

      {isMobile && (
        <Hamburger
          onClick={toggleMenu}
          variants={iconVariants}
          animate={isOpen ? 'open' : 'closed'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
      )}

      <AnimatePresence>
        {isMobile && isOpen && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      <NavMenu
        initial={false}
        animate={isMobile ? (isOpen ? 'visible' : 'hidden') : false}
        variants={isMobile ? menuVariants : {}}
      >
        {['/', '/about', '/skills', '/experience', '/education', '/contact'].map((path, index) => (
          <motion.div
            key={path}
            custom={index}
            initial="hidden"
            animate={isMobile ? (isOpen ? 'visible' : 'hidden') : 'visible'}
            variants={isMobile ? linkVariants : {}}
          >
            <NavLink to={path} onClick={() => setIsOpen(false)}>
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          </motion.div>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default Header;
