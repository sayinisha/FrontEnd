// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = '8584134958e71d3be95f4da6ab79289a'; // replace with your OpenWeatherMap API key

// function WeatherApp() {
//   const [city, setCity] = useState('Chennai');
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async () => {

//     try {
//       // const response = await axios.get(
//         // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//       // );
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY}`
//       );
      
//       console.log(response)
//       setWeather(response.data);
//     } catch (error) {
//       alert('City not found');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '2rem' }}>
//       <h2>🌤️ Weather App</h2>
//       <input
//         type="text"
//         value={city}
//         placeholder="Enter city"
//         onChange={(e) => setCity(e.target.value)}
//         style={{ padding: '0.5rem', width: '200px' }}
//       />
//       <button onClick={fetchWeather} style={{ marginLeft: '10px', padding: '0.5rem' }}>
//         Get Weather
//       </button>

//       {weather && (
//         <div style={{ marginTop: '2rem' }}>
//           <h3>{weather.name}, {weather.sys.country}</h3>
//           <p>🌡️ Temperature: {weather.main.temp}°C</p>
//           <p>☁️ Condition: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WeatherApp;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WeatherApp from './pages/WeatherApp';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, AppBar, Typography } from '@mui/material';
import { Menu as MenuIcon, Cloud as CloudIcon } from '@mui/icons-material';

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
        </div>
      </Drawer>
      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
