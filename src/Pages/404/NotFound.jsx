import React from 'react';
import MusicBackground from './MusicBackground';

export const NotFound = () => {
  const notFoundStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '48px',
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '24px',
  };

  return (
    <div style={notFoundStyle}>
      <MusicBackground />
      <h1 style={headingStyle}>Error 404</h1>
      <p style={messageStyle}>La página que estás buscando no se encontró.</p>
    </div>
  );
};



