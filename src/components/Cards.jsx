import React from "react";
import Pict from "../assets/my_pict.png";
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

function CardsServices({ src, title, desc }) {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={src} alt="figma" className="w-14 h-14" />
        <h2 className="font-bold text-xl text-white py-4">{title}</h2>
        <p className="font-bold text-xs text-white">{desc}</p>
      </div>
    </div>
  );
}

function CardsProjects({ src, title, desc, link }) {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <figure>
        <img src={src} alt="card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-white">{title}</h2>
        <p className="font-normal text-base text-white">{desc}</p>
        <div className="card-actions justify-end">
          <a href={link} target="_blank">
            <button className="btn bg-bg-iconbtn rounded-lg">See More!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function CardTeams({ src, desc, images, job_title, name }) {
  return (
    <div className="card w-full bg-bg-card rounded-md">
      <div className="card-body">
        <img src={src} alt="Quotes" className="w-14 h-14" />
        <p className="font-bold text-xs text-white">{desc}</p>
        <div className="grid grid-rows-3 grid-flow-col gap-1 pt-2">
          <img
            src={images}
            alt="img"
            className="row-span-3 w-[60px] h-[60px] rounded-full"
          />
          <p className="col-span-2 font-bold text-base text-white">
            {job_title}
          </p>
          <p className="row-span-2 col-span-2 font-semibold text-base text-white">
            {name}
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
  CardsServices,
  CardsProjects,
  CardTeams,
  CardsCity,
  CardsPhone,
  CardsMail,
  CardsContact,
};
