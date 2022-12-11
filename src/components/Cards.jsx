import React from "react";
import Pict from "../assets/my_pict.png";

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
        <img src={src} alt="card" className="w-full h-full" />
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
        <p className="font-normal text-xs text-white">{desc}</p>
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

function CardsInfo({ src, link, information }) {
  return (
    <>
      <div className="card w-full bg-bg-card rounded-md">
        <div className="card-body">
          <a href={link} target="_blank">
            <figure className="place-content-center">
              <img src={src} alt="city" className="w-9 h-9" />
            </figure>
            <p className="font-bold text-base text-white text-center">
              {information}
            </p>
          </a>
        </div>
      </div>
      <br />
    </>
  );
}

export { Cards, CardsServices, CardsProjects, CardTeams, CardsInfo };
