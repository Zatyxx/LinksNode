import { useState } from "react";
import './style-ijat.css';
import FotoProfil from './assets/ijat-mesem.jpeg';
import LogoReact from './assets/react.svg';
import {Tooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function App() {

    const [sosmed] = useState([
        { id: 1, nama: "Instagram", link: "https://www.instagram.com/zattxyz/", icon: "fa-brands fa-instagram" },
        { id: 2, nama: "GitHub", link: "https://github.com/Zatyxx", icon: "fa-brands fa-github" },
        { id: 3, nama: "WhatsApp", link: "https://wa.me/6282138120493", icon: "fa-brands fa-whatsapp" },
        { id: 4, nama: "Portofolio", link: "https://www.portoizzat.my.id", icon: "fa-solid fa-user" },
        { id: 5, nama: "Penghitung Poin LCC", link: "https://penghitungskorlcc.vercel.app", icon: "fa-solid fa-calculator" }
    ]);

    return (
        <div className="container">
            <section id="hero-profile">
                <div className="profile">
                    <img src={FotoProfil} alt="ijat-mesem" id="foto-profil" />
                    <div className="profil-desc">
                        <h1 data-tooltip-id="tooltip-creator" data-tooltip-content="The Creator">@Zattxyz</h1>
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
            <p>Created by Izzat <b>with</b> <img id="react-logo" src={LogoReact} alt="React Logo" data-tooltip-id="img-tooltip" data-tooltip-content="React" /></p>
            <Tooltip className="tooltip-style" id="img-tooltip" place="top" variant="light" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", backdropFilter: "blur(5px)" }}/>
            <Tooltip className="tooltip-creator-id" id="tooltip-creator" place="bottom" variant="dark" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", backdropFilter: "blur(5px)" }}/>
        </div>
    );
}

export default App 