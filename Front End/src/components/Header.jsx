import React, { useState, useEffect } from "react";
import "react-router-dom";
import { Menu, X } from "lucide-react"; // 👈 Icônes modernes

const Header = () => {
  const [showName, setShowName] = useState(true); // État pour afficher ou masquer le nom
  const [darkMode, setDarkMode] = useState(false); // État pour gérer le mode sombre
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu burger
  const [activeLink, setActiveLink] = useState("presentation"); // Pour que le lien soit active quand on clique dessus

  // Utilisation de useEffect pour alterner l'affichage du nom toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 5000);
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    return () => clearInterval(interval);
  }, []);

  // Fonction pour basculer entre le mode sombre et le mode clair
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  // useEffect pour ajouter et retirer l'événement de scroll
  useEffect(() => {
    // Fonction pour fermer le menu lorsque la page est scrollée
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]); // Se déclenche uniquement lorsque menuOpen change

  // Fonction pour créer des spans avec une animation pour chaque lettre
  const getAnimatedLetters = (text) => {
    return text.split("").map((letter, index) =>
      letter === " " ? (
        <span key={index} className="space">
          &nbsp;
        </span>
      ) : (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }} // Animation de chaque lettre avec un délai
        >
          {letter}
        </span>
      ),
    );
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="name-mode">
          {/* Nom avec animation, affiché ou masqué selon `showName` */}
          <div className={`name ${showName ? "show-name" : "hide-name"}`}>
            {getAnimatedLetters("Ophélie Azor")}
          </div>
          {/* Bouton pour basculer entre mode clair et mode sombre */}
          <button
  onClick={toggleDarkMode}
  className={`dark-mode-toggle ${darkMode ? "dark-mode-toggle" : "light-mode-toggle"}`}
>
  <span className="dark">{darkMode ? "Light Mode" : "Dark Mode"}</span> 
  <span className="moon-sun">{darkMode ? "🌙" : "☀️"}</span> 
</button>
        </div>

        {/* Menu Burger pour version mobile */}
       <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
  {menuOpen ? <X size={32} /> : <Menu size={32} />}
</button>

      </nav>

      {/* Overlay plein écran */}
      {menuOpen && (
        <div className="overlay">
            <button onClick={() => setMenuOpen(false)} className="close-btn">
      <X size={32} />
    </button>
          <ul className="overlay-menu">
            <li>
              <a
                href="#presentation"
                className={activeLink === "presentation" ? "active" : ""}
                onClick={() => { setActiveLink("presentation"); setMenuOpen(false); }}
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#competences"
                className={activeLink === "competences" ? "active" : ""}
                onClick={() => { setActiveLink("competences"); setMenuOpen(false); }}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink === "projects" ? "active" : ""}
                onClick={() => { setActiveLink("projects"); setMenuOpen(false); }}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => { setActiveLink("contact"); setMenuOpen(false); }}
              >
                Contact
              </a>
            </li>
          </ul>
          </div>
        )}
        
    </header>
  );
};

export default Header;
