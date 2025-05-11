import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material'; 

import {Typography }     from '@mui/material';
import { motion }        from 'framer-motion';  
import { Route, Routes } from 'react-router-dom';

import Contact from './contact';
const Home = () => {
    const [open, setOpen] = useState(false); 
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // List of 10 projects
    const projects = [
        'Project 1: Portfolio Website',
        'Project 2: E-commerce Site',
        'Project 3: Blogging Platform',
        'Project 4: Task Management App',
        'Project 5: Weather App',
        'Project 6: Chat Application',
        'Project 7: Recipe Finder App',
        'Project 8: Social Media Dashboard',
        'Project 9: Real Estate Website',
        'Project 10: Music Streaming App'
    ];

    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="profile-header">
                    <Typography
                        className = "heading"
                        variant   = "h3"
                        sx        = {{
                            fontWeight: '700',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                        }}
                        component  = {motion.h3}
                        initial    = {{ opacity: 0 }}
                        animate    = {{ opacity: 1 }}
                        transition = {{ duration: 0.8 }}
                    >
                        Hi, I'm
                        <span className="highlight"> Niyas 👋</span>
                    </Typography>
                    <p className="intro-text">
                        A passionate <span className="highlight">Frontend Developer</span> crafting modern, pixel-perfect UIs using React, Tailwind CSS, and JavaScript.
                    </p>
                </div>
                {/* Skills Grid */}
                <div className="skills-container">
                    <h2 className="skills-title">🚀 Tech Stack</h2>
                    <div className="skills-grid">
                        <Skill icon="⚛️" label="React" />
                        <Skill icon="🌐" label="Tailwind" />
                        <Skill icon="📦" label="Redux Toolkit" />
                        <Skill icon="🎨" label="Material UI" />
                        <Skill icon="🧰" label="JavaScript" />
                        <Skill icon="💻" label="HTML5" />
                        <Skill icon="🎨" label="CSS3" />
                        <Skill icon="🛠️" label="Git" />
                    </div>
                </div>
                {/* Call to Action */}
                <div className="cta-container">
                    <a href="#projects" className="cta-button primary" onClick={handleClickOpen}>
                        📂 View Projects
                    </a>
                    <a href="/portFolio/contact" className="cta-button secondary">
                        ✉️ Contact Me 
                    </a>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="sm"
                    fullWidth
                    sx={{
                        borderRadius: '10px', // Rounded corners
                        boxShadow: '0 6px 12px rgba(0,0,0,0.1)', // Subtle shadow effect
                        background: 'linear-gradient(to bottom right, #e0f7fa, #0288d1)',
                        animation: 'fadeIn 0.5s ease-out', // Smooth fade-in animation
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>🌟 My Projects</DialogTitle>
                    <DialogContent sx={{ paddingBottom: '16px' }}>
                        <List sx={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {projects.map((project, index) => (
                                <Box key={index}>
                                    <ListItem
                                        sx={{
                                            paddingBottom: '12px',
                                            paddingTop: '12px',
                                            borderRadius: '8px',
                                            background: 'rgba(255, 255, 255, 0.8)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'rgba(0, 136, 212, 0.15)',
                                                transform: 'translateX(5px)',
                                            },
                                        }}
                                    >
                                        <InfoOutlined sx={{ marginRight: '10px', color: '#0288d1' }} />
                                        <ListItemText
                                            primary={project}
                                            sx={{
                                                fontSize: '1.1rem',
                                                fontWeight: '500',
                                                color: '#333',
                                            }}
                                        />
                                    </ListItem>
                                    {index < projects.length - 1 && <Divider sx={{ borderColor: '#0288d1' }} />}
                                </Box>
                            ))}
                        </List>
                    </DialogContent>
                    <DialogActions sx={{ paddingBottom: '16px', justifyContent: 'center' }}>
                        <Button onClick={handleClose} color="primary" variant="contained" sx={{ textTransform: 'none' }}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Routes>
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </section>
    );
};

// Skill Card Component
const Skill = ({ icon, label }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <span className="skill-label">{label}</span>
  </div>
);

export default Home;
