import React from "react";
import Logo_fb from "../assets/logo_fb.svg";
import Logo_ig from "../assets/logo_ig.svg";
import Logo_github from "../assets/logo_github.svg";
import Logo_linked from "../assets/logo_linkedin.svg";
import Logo_tiktok from "../assets/logo_tiktok.svg";
import Logo_twitter from "../assets/logo_twitter.svg";

function Buttons() {
  return (
    <button className="btn bg-bg-iconbtn rounded-full ">Download CV</button>
  );
}

function ButtonsViewsAll() {
  return (
    <button className="btn bg-bg-iconbtn rounded-lg ">Views All Works</button>
  );
}

function ButtonsSendMessages() {
  return (
    <button className="btn bg-bg-iconbtn rounded-lg ">Send Messages</button>
  );
}

function ButtonFb() {
  return (
    <button className="">
      <img src={Logo_fb} />
    </button>
  );
}

function ButtonIg() {
  return (
    <button className="">
      <img src={Logo_ig} />
    </button>
  );
}

function ButtonGithub() {
  return (
    <button className="">
      <img src={Logo_github} />
    </button>
  );
}

function ButtonLinkedIn() {
  return (
    <button className="">
      <img src={Logo_linked} />
    </button>
  );
}

function ButtonTiktok() {
  return (
    <button className="">
      <img src={Logo_tiktok} />
    </button>
  );
}

function ButtonTwitter() {
  return (
    <button className="">
      <img src={Logo_twitter} />
    </button>
  );
}

export {
  Buttons,
  ButtonsViewsAll,
  ButtonsSendMessages,
  ButtonFb,
  ButtonIg,
  ButtonGithub,
  ButtonLinkedIn,
  ButtonTiktok,
  ButtonTwitter,
};
