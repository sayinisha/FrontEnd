
import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '8584134958e71d3be95f4da6ab79289a'; // replace with your OpenWeatherMap API key

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {

    try {
      // const response = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      // );
    //   const response = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY}`
    //   );
    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: `${city},IN`,
            units: 'metric',
            appid: API_KEY
          }
        }
      );
      setWeather(data);
    }
    catch(error){
        alert(`"${city}" is not City name in India`);
    }
  };

  return (
    <div style={{
        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '2rem',
        // height: '81vh' ,
        height: 'calc(81vh - 0px)',
      }}>
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '20px',
          boxShadow: '0 12px 25px rgba(0,0,0,0.2)',
          width: '360px',
          textAlign: 'center',
          color: '#333'
        }}><h2
        style={{
          marginBottom: '1.5rem',
          color: '#007bff',
          fontSize: '2rem',
          fontWeight: '700',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontFamily: `'Segoe UI', sans-serif'`
        }}
      >
        <span role="img" aria-label="weather">🌦️</span> Weather Now
      </h2>
      
          {/* <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Type city name"
            style={{
              width: '100%',
              padding: '0.6rem',
              fontSize: '1rem',
              borderRadius: '10px',
              border: '1px solid #ccc',
              marginBottom: '1rem',
              outline: 'none'
            }}
          />
          <button
            onClick={fetchWeather}
            style={{
              width: '100%',
              padding: '0.8rem',
              fontSize: '1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Show Weather
          </button> */}
  <input
  type="text"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="🔍 Enter city name"
  style={{
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    borderRadius: '12px',
    border: '1px solid #ddd',
    marginBottom: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',

    // boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: '0.3s',
    fontFamily: `'Segoe UI', sans-serif`,
  }}
/>

<button
  onClick={fetchWeather}
  style={{
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'background 0.3s ease',
    fontFamily: `'Segoe UI', sans-serif`,
  }}
>
  🌤️ Show Weather
</button>

        {weather && (
  <div
    style={{
      marginTop: '2rem',
      padding: '2rem',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #dcefff, #ffffff)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: `'Segoe UI', sans-serif`,
      textAlign: 'center',
    }}
  >
    <h2 style={{ color: '#333', marginBottom: '1rem' }}>
      📍 {weather.name}, {weather.sys.country}
    </h2>
    <p
      style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '1rem 0',
        color: '#0077ff',
      }}
    >
      🌡️ {weather.main.temp}°C
    </p>
    <p
      style={{
        fontSize: '1.2rem',
        fontStyle: 'italic',
        color: '#555',
      }}
    >
      ☁️ {weather.weather[0].description}
    </p>
  </div>
)}

        </div>
      </div>
  
  
  );
}

export default WeatherApp;