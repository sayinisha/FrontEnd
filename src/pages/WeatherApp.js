
import React, { useState,useEffect } from 'react';
import axios from 'axios';

const API_KEY = '8584134958e71d3be95f4da6ab79289a'; // replace with your OpenWeatherMap API key

      const API_KEYs = 'YOUR_GOOGLE_MAPS_API_KEY';
function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);


  useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(position)
      // Reverse geocoding API to get city name
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEYs}`
        );

        const results = response.data.results;
        console.log(response)
        if (results.length > 0) {
          // Find the city from the address components
          const city = results[0].address_components.find((component) =>
            component.types.includes('locality')
          );
          console.log(city)
          setCity(city ? city.long_name : 'City not found');
        } else {
          setCity('City not found');
        }
      } catch (error) {
        // setError('Error fetching city');
        // console.error('Geocoding API error:', error);
      }
    },
    (error) => {
    //   setError('Location permission denied or unavailable');
    //   console.error('Geolocation error:', error);
    }
  );
}, []);


  const fetchWeather = async () => {

    try {
      // const response = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      // );
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY}`
      );
      
      console.log(response)
      setWeather(response.data);
    } catch (error) {
      alert('City not found');
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
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#007bff' }}>🌦️ Weather Now</h2>
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
            placeholder="Type city name"
            style={{
                width: '100%',
                padding: '0.8rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '1px solid #ccc',
                marginBottom: '1rem',
                outline: 'none',
                boxSizing: 'border-box' // ensures consistent width
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
                fontWeight: '600',
                boxSizing: 'border-box'
            }}
        >
            Show Weather
        </button>

          {weather && (
            <div style={{
              marginTop: '2rem',
              backgroundColor: '#f0f8ff',
              borderRadius: '15px',
              padding: '1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ marginBottom: '0.5rem' }}>
                📍 {weather.name}, {weather.sys.country}
              </h3>
              <p style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
                🌡️ {weather.main.temp}°C
              </p>
              <p style={{ fontStyle: 'italic' }}>
                ☁️ {weather.weather[0].description}
              </p>
            </div>
          )}
        </div>
      </div>
  
  
  );
}

export default WeatherApp;