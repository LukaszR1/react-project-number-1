export default function Navigation() {
  return (
    <nav>
      <div className="container container-navigation">
        <div className="logo">moja firma</div>
        <ul className="list-navigation">
          <li>
            <a href="#about">o nas</a>
          </li>
          <li>
            <a href="#offer-section">oferta</a>
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
