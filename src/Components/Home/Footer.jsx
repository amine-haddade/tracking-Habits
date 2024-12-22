import React from 'react';
import {Facebook,Instagram,Github,Linkedin} from 'lucide-react'
function Footer() {
  return (
    <footer>
      <div className="cols">
        <div className="col col-1">
          <h1>À propos</h1>
          <ul>
            <li> Documentation</li>
            <li>Formation</li>
            <li>Tutoriels</li>
          </ul>
        </div>

        {/* Colonne 2 : Services */}
        <div className="col col-2">
          <h1>Nos services</h1>
          <ul>
            <li>Gestion des tâches</li>
            <li>Suivi des habitudes</li>
            <li>Kanban</li>
            <li>Pomodoro</li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div className="col col-3">
          <h1>Contactez-nous</h1>
          <ul>
            <li>Email support@lifemanager.com</li>
            <li>Téléphone : +1 234 567 89</li>
          </ul>
        </div>

        {/* Colonne 4 : Réseaux sociaux */}
        <div className="col col-4">
          <h1>Réseaux sociaux</h1>
          <ul>
            <li><Linkedin /></li>
            <li><Github /></li>
            <li><Instagram /></li>
            <li><Facebook /></li>
          </ul>
        </div>

        {/* Colonne 5 : Ressources */}
        
      </div>
    </footer>
  );
}

export default Footer;
