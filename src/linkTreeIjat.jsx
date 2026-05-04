import { useState } from "react";
import './style-ijat.css';
import FotoProfil from './assets/ijat-mesem.jpeg';

function App() {

    const [sosmed] = useState([
        { id: 1, nama: "Instagram", link: "https://www.instagram.com/zattxyz/", icon: "fa-brands fa-instagram" },
        { id: 2, nama: "GitHub", link: "https://github.com/Zatyxx", icon: "fa-brands fa-github" },
        { id: 3, nama: "WhatsApp", link: "https://wa.me/6282138120493", icon: "fa-brands fa-whatsapp" },
        { id: 4, nama: "Portofolio", link: "https://www.portoizzat.my.id", icon: "fa-solid fa-user" }
    ]);

    return (
        <div className="container">
            <section id="hero-profile">
                <div className="profile">
                    <img src={FotoProfil} alt="ijat-mesem" />
                    <div className="profil-desc">
                        <h1>@Zattxyz</h1>
                        <span>Designer | Photographer | Programmer</span>
                    </div>
                </div>
            </section>
            <section id="card">
                <div className="card-wrapper">
                    <div className="card">
                        {sosmed.map((sosmed) => (
                            <a href={sosmed.link} key={sosmed.id} target="_blank" rel="noopener noreferrer" className="link-card" >
                                <i className={sosmed.icon} ></i>
                                <span className="card-text">{sosmed.nama}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <p>Created by Izzat <br /> X PK 1</p>
        </div>
    );
}

export default App 