import './App.css';
import React                                                                                 from 'react';
import {BrowserRouter as Router,Routes,Route,Link}                                           from 'react-router-dom';
import {Drawer,List,ListItem,ListItemIcon,ListItemText,IconButton,Toolbar,AppBar,Typography} from '@mui/material';
import {Menu as MenuIcon,Cloud as CloudIcon}                                                 from '@mui/icons-material';

import WeatherApp from './pages/WeatherApp';
import Portfolio  from './pages/portfolio'

function App() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => setOpen(!open);

    return (
        <Router>
            {/* <nav style={{ padding: '1rem' }}>
                <Link to="/weather" style={{ color: 'black', textDecoration: 'none', marginRight: '10px' }}>
                Weather App
                </Link>
            </nav> */}
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">My Front End  App</Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div style={{ width: 250 }}>
                    <List>
                        <ListItem button component={Link} to="/weather" onClick={toggleDrawer}>
                            <ListItemIcon><CloudIcon /></ListItemIcon>
                            <ListItemText primary="Weather App" />
                        </ListItem>
                        {/* Add more menu items here */}
                    </List>
                    <List>
                        <ListItem button component={Link} to="/portFolio" onClick={toggleDrawer}>
                            {/* <ListItemIcon><CloudIcon /></ListItemIcon> */}
                            <ListItemText primary="Portfolio App" />
                        </ListItem>
                        {/* Add more menu items here */}
                    </List>
                </div>
            </Drawer>
            <Routes>
                <Route path="/weather" element={<WeatherApp />} />
                <Route path="/portFolio/*" element={<Portfolio />} />
                <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Page Not Found</h2>} />
            </Routes>
        </Router>
    );
}

export default App;
