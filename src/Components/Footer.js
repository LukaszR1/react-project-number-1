import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container container-footer">
        <div className="logo">Nazwa firmy - wszelkie prawa zastrzeżone, 2022</div>
        <ul className="footer-icons">
          <li className="instagram">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="facebook">
            <i className="fa-brands fa-square-facebook"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
