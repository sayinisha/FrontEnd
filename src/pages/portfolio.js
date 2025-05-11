
import {Route, Routes, } from 'react-router-dom';
import React             from 'react';
import { NavLink }       from 'react-router-dom';  
import { Box }           from '@mui/material';  
import Home              from '../components/home';
import About             from '../components/about';
import Projects          from '../components/projects';
import Contact           from '../components/contact';

const Portfolio = () => {
    return (
        <div>
            {/* Navigation Links */}
            <Box sx={{ display: 'flex', gap: 3, padding: '1rem' }}>
                <NavLink
                    to="/portFolio/home"
                    style={({ isActive }) => ({
                        color: isActive ? '#1976d2' : 'text.primary',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/portFolio/about"
                    style={({ isActive }) => ({
                        color: isActive ? '#1976d2' : 'text.primary',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                    About
                </NavLink>
                <NavLink
                    to="/portFolio/projects"
                    style={({ isActive }) => ({
                        color: isActive ? '#1976d2' : 'text.primary',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/portFolio/contact"
                    style={({ isActive }) => ({
                        color: isActive ? '#1976d2' : 'text.primary',
                        textDecoration: 'none',
                        fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                    Contact
                </NavLink>
            </Box>

            {/* Sections corresponding to each part of the page */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
};
export default Portfolio;