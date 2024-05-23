"use client";
import React from 'react';

function Navigation() {
  const uncheck = () => {
    const checkbox = document.getElementById('navi-toggle');
    checkbox.checked = false;
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox hidden" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#notice" className="navigation__link" onClick={uncheck}>Notice Board</a></li>
          <li className="navigation__item"><a href="#placement" className="navigation__link" onClick={uncheck}>Placements</a></li>
          <li className="navigation__item"><a href="#at" className="navigation__link" onClick={uncheck}>About Us</a></li>
          <li className="navigation__item"><a href="#ot" className="navigation__link" onClick={uncheck}>Our Team</a></li>
          <li className="navigation__item"><a href="#co" className="navigation__link" onClick={uncheck}>Coordinators</a></li>
          <li className="navigation__item"><a href="#cu" className="navigation__link" onClick={uncheck}>Contact Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
