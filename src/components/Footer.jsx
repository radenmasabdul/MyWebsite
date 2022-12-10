import React from "react";
import Logo from "../assets/MyLogoFix.png";
import { sosmed } from "../data/sosmed";
import { ButtonSosmed } from "../components/Buttons";

function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-bg-color-primary text-primary-content">
      <div>
        <figure>
          <img src={Logo} alt="logo" className="w-full h-8" />
        </figure>
        <section className="flex space-x-4 py-4">
          {sosmed.map((sosmed) => (
            <ButtonSosmed key={sosmed.id} img={sosmed.img} link={sosmed.link} />
          ))}
        </section>
        <p className="text-white">ARA © 2022 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
