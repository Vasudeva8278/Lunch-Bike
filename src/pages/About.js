import React, { useState } from 'react';
import imgb from '../Media/dirty.jpg';

const About = () => {
  const [rotation, setRotation] = useState({ x: 1, y: 1 });

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Calculate the rotation angle based on mouse position
    const x = e.clientX - left;
    const y = e.clientY - top;
    const angleX = ((x / width) *180 - 60).toFixed(2);
    const angleY = ((y / height) * 180 - 60).toFixed(0);

    // Set the rotation state
    setRotation({ x: angleX, y: angleY });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35rem',
        backgroundColor: 'black',
      }}
      onMouseMove={handleMouseMove}
    >
      <img
        src={imgb}
        alt="Description of your image"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
          transition: 'transform 0.2s ease',
        }}
      />
    </div>
  );
};

export default About;
