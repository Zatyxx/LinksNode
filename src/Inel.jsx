import { useState } from "react";
import './App.css';

function Inel() {
  // Kita hapus bagian 'icon' dari data
  const [links] = useState([
    { id: 1, name: 'Instagram', url: 'https://instagram.com/inealimup', color: '#32f8ff' },
    { id: 2, name: 'Github', url: 'https://github.com/inealimup', color: '#32f8ff' },
    { id: 3, name: 'Linkedin', url: 'https://linkedin.com/in/inealimup', color: '#32f8ff' },
    { id: 3, name: 'Linkedin', url: 'https://linkedin.com/in/inealimup', color: '#32f8ff' },
    { id: 3, name: 'Linkedin', url: 'https://linkedin.com/in/inealimup', color: '#32f8ff' }
  ]);

  return (
    <div className="container">
      <div className="profil">
        {/* Kamu bisa ganti emoji ini nanti dengan tag <img> kalau sudah ada fotonya */}
        <div className="avatar">📸</div>
        <h1>@InealImup</h1>
        <p>UI / UX Designer</p>
      </div>

      <div className="card-wrapper">
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-card" 
            style={{ borderLeft: `5px solid ${link.color}` }}
          >
            <span className="name">{link.name}</span>
            {/* Ikon panah kita ganti pakai simbol teks biasa dulu */}
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Inel;