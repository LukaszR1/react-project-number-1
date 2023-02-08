import React from "react";

export default function Navigation() {
  return (
    <nav>
      <div className="container container-navigation">
        <div className="logo">moja firma</div>
        <ul className="list-navigation">
          <li>
            <a href="#about-us">o nas</a>
          </li>
          <li>
            <a href="#services">oferta</a>
          </li>
          <li>
            <a className="contact" href="#contact">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
