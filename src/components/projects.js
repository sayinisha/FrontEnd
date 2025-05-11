import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website to showcase my skills and projects. Built with React.js and styled with Tailwind CSS.',
            link: 'https://portfolio-example.com',
        },
        {
            title: 'E-commerce Site',
            description: 'An online store platform with product management, shopping cart, and secure checkout system. Built using React, Redux, and Firebase.',
            link: 'https://ecommerce-example.com',
        },
        {
            title: 'Blogging Platform',
            description: 'A blogging platform where users can write, edit, and comment on posts. It uses React.js, Node.js, and MongoDB.',
            link: 'https://blogging-platform-example.com',
        },
        {
            title: 'Task Management App',
            description: 'A task manager to keep track of daily tasks. It includes features like deadlines, categories, and task completion status.',
            link: 'https://task-manager-example.com',
        },
        {
            title: 'Weather App',
            description: 'A weather forecast application built with React, fetching real-time data from a weather API.',
            link: 'https://weather-app-example.com',
        },
        {
            title: 'Chat Application',
            description: 'A real-time chat application built using Socket.IO, React, and Express. Features private and group messaging.',
            link: 'https://chat-app-example.com',
        },
        {
            title: 'Recipe Finder App',
            description: 'An app that helps you find recipes based on ingredients you have at home. It uses APIs to fetch recipe details.',
            link: 'https://recipe-finder-app-example.com',
        },
        {
            title: 'Social Media Dashboard',
            description: 'A dashboard to track social media statistics, engagement, and trends. Built with React and integrated with social media APIs.',
            link: 'https://social-media-dashboard-example.com',
        },
        {
            title: 'Real Estate Website',
            description: 'A real estate platform to buy, sell, and rent properties. It includes advanced search filters and property details.',
            link: 'https://real-estate-example.com',
        },
        {
            title: 'Music Streaming App',
            description: 'A music streaming platform with personalized playlists, search functionality, and audio player integration.',
            link: 'https://music-streaming-app-example.com',
        },
    ];

    return (
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#E0F7FA' }}>
            <Typography variant="h2" sx={{ fontWeight: '700', color: '#1E88E5', marginBottom: '30px' }}>
                My Projects
            </Typography>
            <Typography variant="h5" sx={{ color: '#555', marginBottom: '50px' }}>
                Explore my collection of projects where I applied modern web technologies to solve real-world problems.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '30px' }}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={10}
                            sx={{
                                padding: '20px',
                                background: 'linear-gradient(145deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                                borderRadius: '16px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 15px 40px rgba(63,94,251,0.3)',
                                background: 'linear-gradient(145deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)',
                                },
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#ddd', marginBottom: '20px', fontSize: '1rem' }}>
                                {project.description}
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Button
                                variant="outlined"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    padding: '10px 25px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#121212',
                                    borderColor: '#121212',
                                    },
                                }}
                                href={project.link}
                                target="_blank"
                                >
                                View Project
                                <ArrowForward sx={{ marginLeft: '8px' }} />
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Projects;
