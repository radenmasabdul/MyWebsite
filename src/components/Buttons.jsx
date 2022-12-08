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
    <a href="https://www.facebook.com/bangrastakece" target="_blank">
      <button className="">
        <img src={Logo_fb} />
      </button>
    </a>
  );
}

function ButtonIg() {
  return (
    <a href="https://www.instagram.com/radenmasabdul" target="_blank">
      <button className="">
        <img src={Logo_ig} />
      </button>
    </a>
  );
}

function ButtonGithub() {
  return (
    <a href="https://github.com/radenmasabdul" target="_blank">
      <button className="">
        <img src={Logo_github} />
      </button>
    </a>
  );
}

function ButtonLinkedIn() {
  return (
    <a href="https://www.linkedin.com/in/abdulrahmanalhafizh" target="_blank">
      <button className="">
        <img src={Logo_linked} />
      </button>
    </a>
  );
}

function ButtonTiktok() {
  return (
    <a href="https://www.tiktok.com/@radenmasabdul_" target="_blank">
      <button className="">
        <img src={Logo_tiktok} />
      </button>
    </a>
  );
}

function ButtonTwitter() {
  return (
    <a href="https://www.twitter.com/radenmasabdul_" target="_blank">
      <button className="">
        <img src={Logo_twitter} />
      </button>
    </a>
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
