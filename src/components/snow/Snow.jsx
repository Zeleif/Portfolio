// Snow.jsx

import React, { useEffect } from 'react';


const Snow = () => {
  useEffect(() => {
    const container = document.getElementById('snow-container');
    const count = 50;

    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      container.appendChild(snowflake);

      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      const animationDuration = Math.random() * 3 + 2;
      const blur = Math.random() * 5;

      snowflake.style.left = `${left}px`;
      snowflake.style.top = `${top}px`;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.filter = `blur(${blur}px)`;
    }
  }, []);

  return <div id="snow-container" className="snow-container" />;
};

export default Snow;
