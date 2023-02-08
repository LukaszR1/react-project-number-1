import React from "react";

export default function Header() {
  return (
    <header>
      <div className="cover">
        <div className="container container-main">
          <div className="wrapper">
            <h1 className="header main-header">
              Nasza firma oferuje najwyższej jakości produkty
            </h1>
            <p className="paragraph-main">Nie wierz nam na słowo - sprawdź!</p>
            <a className="button-link" href="#services">
              Oferta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
