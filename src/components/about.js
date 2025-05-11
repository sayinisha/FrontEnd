import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { AccountCircle, Code, Computer, DesignServices } from '@mui/icons-material';
import { motion } from 'framer-motion';  // For animations

const About = () => {
    return (
        <Box
            sx={{
                padding: '60px 20px',
                background: 'linear-gradient(135deg, #6fa3ef, #1e88e5)',
                borderRadius: '15px',
                color: '#fff',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                marginBottom: '50px',
            }}
        >
            {/* Title */}
            <Typography
                className="highlight"
                variant="h3"
                sx={{
                    fontWeight: '700',
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                }}
                component={motion.h3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </Typography>
            {/* Description */}
            <Typography
                variant="h5"
                sx={{
                    fontWeight: '300',
                    marginBottom: '40px',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.8',
                }}
            >
                I'm a passionate <span style={{ fontWeight: 'bold', color: '#ffeb3b' }}>Frontend Developer</span> with a love for crafting
                beautiful, user-friendly web experiences. I specialize in React, JavaScript, and creating responsive designs using modern tools.
                I'm driven by the desire to make the web more interactive, accessible, and delightful.
            </Typography>

            {/* Skill and Passion Section */}
            <Grid container spacing={4} justifyContent="center">
                {/* Card 1: Web Development */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={8}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Code sx={{ fontSize: '3rem', color: '#0288d1' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600', color: '#0288d1' }}>
                            Web Development
                        </Typography>
                        <Typography sx={{ color: '#555', marginTop: '10px' }}>
                            I build scalable and efficient web applications with React.js, enhancing user experiences and creating seamless workflows.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Card 2: UI/UX Design */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={8}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <DesignServices sx={{ fontSize: '3rem', color: '#ff9800' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600', color: '#ff9800' }}>
                            UI/UX Design
                        </Typography>
                        <Typography sx={{ color: '#555', marginTop: '10px' }}>
                            I craft visually appealing and intuitive user interfaces, focusing on usability and user-centered design principles.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Card 3: Problem Solving */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={8}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Computer sx={{ fontSize: '3rem', color: '#4caf50' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600', color: '#4caf50' }}>
                            Problem Solving
                        </Typography>
                        <Typography sx={{ color: '#555', marginTop: '10px' }}>
                            I love tackling complex problems and finding elegant solutions, ensuring that the code is efficient, maintainable, and scalable.
                        </Typography>
                    </Paper>
                </Grid>

                {/* Card 4: Continuous Learning */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper
                        elevation={8}
                        sx={{
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                        }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <AccountCircle sx={{ fontSize: '3rem', color: '#f44336' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600', color: '#f44336' }}>
                            Continuous Learning
                        </Typography>
                        <Typography sx={{ color: '#555', marginTop: '10px' }}>
                            I am constantly exploring new technologies and frameworks to stay up-to-date with industry trends and provide the best solutions.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Call to Action */}
            <motion.div
                style={{ marginTop: '50px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        fontSize: '1.2rem',
                        padding: '15px 30px',
                        borderRadius: '50px',
                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                        textTransform: 'none',
                    }}
                    href="#contact"
                >
                    Get in Touch 💬
                </Button>
            </motion.div>
        </Box>
    );
};

export default About;
