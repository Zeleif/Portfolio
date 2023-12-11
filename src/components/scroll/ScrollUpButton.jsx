// ScrollUpButton.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const ScrollUpButton = ({ targetSection }) => {
  return (
    <ScrollLink to={targetSection} smooth={true} duration={500}>
      <div className="scroll-button scroll-up-button">
        <FaArrowUp />
      </div>
    </ScrollLink>
  );
};


export default ScrollUpButton;
