import React from "react";

function Buttons() {
  return (
    <button className="btn bg-bg-iconbtn rounded-full ">Download CV</button>
  );
}

function ButtonsViewsAll() {
  return (
    <a href="https://github.com/radenmasabdul" target="_blank">
      <button className="btn bg-bg-iconbtn rounded-lg ">Views All Works</button>
    </a>
  );
}

function ButtonsSendMessages() {
  return (
    <button className="btn bg-bg-iconbtn rounded-lg" type="submit">
      Send Messages
    </button>
  );
}

function ButtonSosmed({ img, link }) {
  return (
    <a href={link} target="_blank">
      <button className="">
        <img src={img} />
      </button>
    </a>
  );
}

export { Buttons, ButtonsViewsAll, ButtonsSendMessages, ButtonSosmed };
