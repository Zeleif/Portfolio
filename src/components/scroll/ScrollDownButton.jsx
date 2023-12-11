import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const ScrollDownButton = ({ targetSection }) => {
  return (
    <Link to={targetSection} smooth={true} duration={500}>
      <div className="scroll-button scroll-down-button">
        <FaArrowDown />
      </div>
    </Link>
  );
};

export default ScrollDownButton;
