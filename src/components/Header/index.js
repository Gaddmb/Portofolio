import React, { useEffect, useState } from "react";

import "./Header.scss";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const top = section.offsetTop - 50;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        setActiveMenuItem(section.id);
      }
    });

    if (scrollPosition === 0) {
      setActiveMenuItem(sections[0]);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // useEffect s'exécutera une seule fois lors du montage du composant

  return (
    <header className="header">
      <>
        <div className="profil">
          <h1>Gaddiel Mbengi</h1>
          <h2>Développeur Front-End</h2>
          <a href="https://github.com/Gaddmb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="90px"
              height="90px"
            >
              <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z" />
            </svg>
          </a>
        </div>
        <nav>
          <ul>
            <li
              className={`${activeMenuItem === "presentation" ? "active" : ""}`}
            >
              <a href="#presentation" className="active">
                <span className="indicator"></span>
                <span className="text">Présentation</span>
              </a>
            </li>

            <li className={activeMenuItem === "skills" ? "active" : ""}>
              <a href="#skills">
                <span className="indicator"></span>
                <span className="text">Mes compétences</span>
              </a>
            </li>

            <li className={activeMenuItem === "projects" ? "active" : ""}>
              <a href="#projects">
                <span className="indicator"></span>
                <span className="text">Mes projets</span>
              </a>
            </li>
          </ul>
        </nav>
      </>

      <div className="container-form">
        <h2>Contactez-moi</h2>
        <form>
          <label>
            Nom :
            <input type="text" name="name" required />
          </label>
          <label>
            Email :
            <input type="email" name="email" required />
          </label>
          <label>
            Message :<textarea name="message" required></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
