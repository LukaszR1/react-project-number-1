export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container-footer">
        <div className="logo">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2022
        </div>
        <ul className="footer-icons">
          <li className="instagram">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li href="https://www.facebook.com" className="facebook">
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
