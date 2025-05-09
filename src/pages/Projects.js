import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const ProjectsSection = styled.section`
padding: 4rem 2rem;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background: transparent;

@media (max-width: 768px) {
padding: 2rem 1rem;
}
`;

const Title = styled(motion.h1)`
font-size: 3.5rem;
background: linear-gradient(90deg, #00d4ff, #00ffa2, #ff00ff);
background-size: 200% auto;
color: transparent;
background-clip: text;
-webkit-background-clip: text;
animation: gradientMove 4s linear infinite;
margin-bottom: 1rem;
text-align: center;

@keyframes gradientMove {
0% {
background-position: 0% center;
}
100% {
background-position: 200% center;
}
}

@media (max-width: 768px) {
font-size: 2.5rem;
margin-bottom: 0.8rem;
}

@media (max-width: 480px) {
font-size: 2rem;
}
`;

const GitHubButton = styled(motion.a)`
display: inline-block;
padding: 0.8rem 2rem;
font-size: 1.2rem;
font-weight: bold;
color: #fff;
background: linear-gradient(90deg, #00d4ff, #00ffa2);
border-radius: 50px;
text-decoration: none;
text-transform: uppercase;
box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
transition: all 0.3s ease;
margin-bottom: 2rem;

&:hover {
background: linear-gradient(90deg, #00ffa2, #ff00ff);
box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
transform: scale(1.05);
}

@media (max-width: 768px) {
padding: 0.6rem 1.5rem;
font-size: 1rem;
margin-bottom: 1.5rem;
}

@media (max-width: 480px) {
padding: 0.5rem 1.2rem;
font-size: 0.9rem;
margin-bottom: 1rem;
}
`;

const ProjectsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
width: 100%;
max-width: 1200px;

@media (max-width: 768px) {
grid-template-columns: 1fr;
gap: 1.5rem;
}
`;

const ProjectCard = styled(motion.div)`
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border-radius: 15px;
padding: 1.5rem;
box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
transform: translateY(-5px);
box-shadow: 0 0 30px rgba(0, 212, 255, 0.4);
}

@media (max-width: 768px) {
padding: 1rem;
}
`;

const ProjectTitle = styled.h2`
font-size: 1.8rem;
color: #00d4ff;
margin-bottom: 0.5rem;

@media (max-width: 768px) {
font-size: 1.5rem;
}
`;

const ProjectDescription = styled.p`
font-size: 1rem;
color: #fff;
line-height: 1.6;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

@media (max-width: 768px) {
font-size: 0.9rem;
}
`;

const projects = [
{
title: 'CEIQX: GenAI-Powered Chatbot for CEOs and Employees',
description: 'Built CEIQX, a chatbot application powered by LLaMa and GPT, designed specifically for companies. The app allows CEOs and employees to communicate in dedicated chat groups while interacting with an intelligent bot that answers work-related and company-specific questions. By integrating with internal resources like Google Drive, emails, and company files, the bot provides instant, informed responses, improving collaboration, productivity, and knowledge sharing across the organization.',
},
{
title: 'AI Calorie Counter App',
description: 'Developed a cross-platform mobile application that tracks daily caloric and macronutrient intake through conversational AI. Built using React Native for the frontend and Node.js for the backend, the app integrates OpenAI\'s GPT-4.1 model to allow users to describe meals in natural language. The chatbot processes input, identifies foods, and calculates nutritional values in real time. Users can view daily summaries through interactive charts, making healthy eating more intuitive and engaging.',
},
{
title: 'Real-Time AR Body Segmentation and Measurement App',
description: 'Developed a real-time body segmentation and measurement app using TensorFlow\'s BodyPix model and AR technology. The app leverages the device camera to segment body parts and measure human body dimensions instantly, creating an interactive augmented reality experience. Ideal for fitness, healthcare, and virtual fitting applications.',
},
{
title: 'STEEL-R: VR Simulation and Event Processing System',
description: 'Contributed to STEEL-R, a VR technology project developed in collaboration with the US Army as an Arizona State University Graduate Researcher at the Software Engineering Lab. The project integrated the GIFT (Generalized Intelligent Framework for Tutoring) system with a Unity-based simulation to enable real-time event tracking through VR headsets. Actions like shooting, walking, and running during training or operations were captured, transmitted, and processed by GIFT to enhance training analysis, feedback, and performance evaluation in immersive environments.',
},
{
title: 'Augmented Reality VR Oculus Unity App',
description: 'Developed a VR/AR application for an architectural company using Oculus SDK, ZED SDK, and Unity. The app allows users to place a full-scale 3D model of a house into a real-world location using AR through a VR headset. Users can walk to the intended building site, place the house model in real time, and interact with it, including moving, resizing, and adjusting it, to visualize how the structure would look in its actual environment, enhancing planning and client presentations.',
},
{
title: 'Bellissimo Colors Official Website',
description: 'Designed and developed a fully responsive, content-managed website for a paint distribution company, using Node.js, HTML/CSS, and REST APIs, following MVC architecture for maintainability.',
},
{
title: 'ChatGPT Desktop App',
description: 'Built a cross-platform desktop version of ChatGPT using Electron, delivering GPT-based capabilities for Windows, Linux, and macOS in a native desktop environment.',
},
{
title: 'Crypto Coin Tracker Mobile App',
description: 'Created a Flutter-based mobile application to track real-time cryptocurrency prices. Integrated REST APIs, Firebase for data sync and push notifications, and included responsive charts for financial insight.',
},
{
title: 'QPICK.IO Backend Core System',
description: 'Built the Django backend for a commercial platform. Developed REST APIs, integrated payment gateways, and deployed the system using AWS and Azure cloud infrastructure.',
},
];

function Projects() {
return (
<ProjectsSection>
<Title
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
My Projects
</Title>
<GitHubButton
href="https://github.com/npoptomov"
target="_blank"
rel="noopener noreferrer"
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
>
See My GitHub
</GitHubButton>
<ProjectsGrid>
{projects.map((project, index) => (
<Tilt key={index} options={{ max: 10, scale: 1.02, speed: 300 }}>
<ProjectCard
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
>
<ProjectTitle>{project.title}</ProjectTitle>
<ProjectDescription>{project.description}</ProjectDescription>
</ProjectCard>
</Tilt>
))}
</ProjectsGrid>
</ProjectsSection>
);
}

export default Projects;