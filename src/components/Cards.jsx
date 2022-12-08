import React from "react";
import Pict from "../assets/my_pict.png";
import Figma from "../assets/logo_figma.svg";
import WebDev from "../assets/logo_react.svg";
import Collab from "../assets/logo_collaboration.svg";
import Quotes from "../assets/logo_quotes.svg";
import Img from "../assets/img_anisa.svg";
import City from "../assets/logo_map.svg";
import Phone from "../assets/logo_telp.svg";
import Mail from "../assets/logo_mail.svg";

import {
  Input,
  InputPhone,
  InputEmail,
  InputSubject,
  TextArea,
} from "../components/Input";

import { ButtonsSendMessages } from "../components/Buttons";

function Cards() {
  return (
    <div className="card w-full bg-[#191E25] rounded-md">
      <img src={Pict} alt="pict" className="w-96 h-96" />
    </div>
  );
}

function CardsFigma() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={Figma} alt="figma" className="w-14 h-14" />
        <h2 className="font-bold text-xl text-white py-4">Figma</h2>
        <p className="font-bold text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores
          iure rem error nulla esse facere tempore ut amet, magnam voluptatibus
          saepe, neque assumenda cum doloribus. Pariatur laboriosam quos
          doloremque.
        </p>
      </div>
    </div>
  );
}

function CardsWebDevelopment() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={WebDev} alt="webdev" className="w-14 h-14" />
        <h2 className="font-bold text-xl text-white py-4">Web Development</h2>
        <p className="font-bold text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores
          iure rem error nulla esse facere tempore ut amet, magnam voluptatibus
          saepe, neque assumenda cum doloribus. Pariatur laboriosam quos
          doloremque.
        </p>
      </div>
    </div>
  );
}

function CardsCollaborations() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={Collab} alt="collab" className="w-14 h-14" />
        <h2 className="font-bold text-xl text-white py-4">Collaborations</h2>
        <p className="font-bold text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores
          iure rem error nulla esse facere tempore ut amet, magnam voluptatibus
          saepe, neque assumenda cum doloribus. Pariatur laboriosam quos
          doloremque.
        </p>
      </div>
    </div>
  );
}

function CardsProjects() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-white">GunTour App</h2>
        <p className="font-normal text-base text-white">
          This is a website created to make it easier for climbers everywhere to
          order tickets and climbing items that they want to rent, especially on
          Mount Gede Pangrango. And this project was built using ReactJS for the
          Javascript library, Figma for UI design, Tailwind CSS for building
          custom interfaces, and DaisyUi for the Tailwind CSS component library
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See More!</button>
        </div>
      </div>
    </div>
  );
}

function CardTeams() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={Quotes} alt="Quotes" className="w-14 h-14" />
        <p className="font-bold text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores
          iure rem error nulla esse facere tempore ut amet, magnam voluptatibus
          saepe, neque assumenda cum doloribus. Pariatur laboriosam quos
          doloremque.
        </p>
        <div className="grid grid-rows-3 grid-flow-col gap-1 pt-2">
          <img src={Img} alt="img" className="row-span-3" />
          <p className="col-span-2 font-bold text-base text-white">
            Frontend Developers
          </p>
          <p className="row-span-2 col-span-2 font-semibold text-base text-white">
            Annisa Ramadani
          </p>
        </div>
      </div>
    </div>
  );
}

function CardsCity() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <a
          href="https://www.google.com/maps/place/6%C2%B034'02.7%22S+106%C2%B047'17.6%22E/@-6.5680169,106.7885313,17z/data=!4m6!3m5!1s0x0:0xf620a0ae574fcdd8!7e2!8m2!3d-6.5674041!4d106.7882313"
          target="_blank"
        >
          <figure className="place-content-center">
            <img src={City} alt="city" className="w-9 h-9" />
          </figure>
          <p className="font-bold text-base text-white text-center">
            Bogor City, West Java, Indonesia
          </p>
        </a>
      </div>
    </div>
  );
}

function CardsPhone() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <a href="tel:+628988416727">
          <figure className="place-content-center">
            <img src={Phone} alt="phone" className="w-9 h-9" />
          </figure>
          <p className="font-bold text-base text-white text-center">
            + 62 898-8416-727
          </p>
        </a>
      </div>
    </div>
  );
}

function CardsMail() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <a href="mailto:abdul.tamsis@gmail.com">
          <figure className="place-content-center">
            <img src={Mail} alt="mail" className="w-9 h-9" />
          </figure>
          <p className="font-bold text-base text-white text-center">
            abdul.tamsis@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
}

function CardsContact() {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body space-y-4">
        <div className="lg:grid grid-cols-2 gap-4 md:grid-flow-row space-y-4">
          <Input />
          <InputPhone />
          <InputEmail />
          <InputSubject />
        </div>
        <div className="lg:grid grid-cols-1 gap-2 md:grid-flow-row my-2">
          <TextArea />
        </div>
        <div className="grid grid-cols-1">
          <ButtonsSendMessages />
        </div>
      </div>
    </div>
  );
}

export {
  Cards,
  CardsFigma,
  CardsWebDevelopment,
  CardsCollaborations,
  CardsProjects,
  CardTeams,
  CardsCity,
  CardsPhone,
  CardsMail,
  CardsContact,
};
