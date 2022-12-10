import React from "react";
import Navbar from "../components/Navbar";
import {
  Cards,
  CardsServices,
  CardsProjects,
  CardTeams,
  CardsCity,
  CardsPhone,
  CardsMail,
  CardsContact,
} from "../components/Cards";

import {
  ButtonFb,
  ButtonIg,
  ButtonGithub,
  ButtonLinkedIn,
  ButtonTiktok,
  ButtonTwitter,
  ButtonsViewsAll,
} from "../components/Buttons";

import Footer from "../components/Footer";
import { data } from "../data/myServices";

function App() {
  return (
    <>
      <Navbar />

      {/* Home */}
      <main
        className="max-w-7xl mx-auto lg:my-14 grid md:grid-flow-col gap-4"
        id="home"
      >
        <article className="md:grid-col-span-2 p-4">
          <p className="text-white font-bold text-[40px] ">Hi! Im </p>
          <p className="text-white font-extrabold text-[40px]">
            ABDUL RAHMAN{" "}
            <span className="text-bg-iconbtn font-extrabold text-[40px]">
              ALHAFIZH
            </span>
          </p>
          <p className="text-white font-semibold text-2xl">
            Frontend Developer
          </p>
          <p className="text-white font-normal text-base pr-0 mt-5 mb-9 lg:pr-64">
            I have the ability to develop a website. For example, Figma for
            design, HTML5 for markup, CSS3 for styling, Bootstrap, or Tailwind
            CSS for frameworks to quickly build custom interfaces. In addition
            to the programming language used in Javascript, I can also use the
            Javascript library ReactJS to develop the website to make it more
            dynamic.
          </p>
          <p className="text-white font-bold text-xl">FIND ME ON</p>
          <section className="grid grid-cols-12 md:grid-flow-col gap-1 mt-4">
            <ButtonFb />
            <ButtonIg />
            <ButtonGithub />
            <ButtonLinkedIn />
            <ButtonTiktok />
            <ButtonTwitter />
          </section>
        </article>

        <aside className="md:grid-col-span-1 p-4 order-first md:order-last">
          <Cards />
        </aside>
      </main>

      {/* Services */}
      <section
        className="max-w-7xl mx-auto md:grid-col-span-2 px-4"
        id="services"
      >
        <h1 className="font-bold text-sm text-text-secondary">MY SERVICES</h1>
        <p className="font-bold text-2xl text-white py-2 lg:py-4">WHAT I DO</p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-2 lg:py-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((myServices) => (
            <CardsServices
              key={myServices.id}
              src={myServices.img}
              title={myServices.title}
              desc={myServices.desc}
            />
          ))}
        </section>
      </main>

      {/* Project */}
      <section
        className="max-w-7xl mx-auto md:grid-col-span-2 px-4 text-center pt-6"
        id="projects"
      >
        <h1 className="font-bold text-sm text-text-secondary">MY PROJECTS</h1>
        <p className="font-bold text-2xl text-white py-2 lg:py-4">
          Recent Works
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-2 lg:py-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardsProjects />
          <CardsProjects />
          <CardsProjects />
        </section>
        <section className="max-w-7xl mx-auto md:grid-col-span-2 px-4 text-center py-4">
          <ButtonsViewsAll />
        </section>
      </main>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto md:grid-col-span-2 px-4">
        <h1 className="font-bold text-sm text-text-secondary">TESTIMONIALS</h1>
        <p className="font-bold text-2xl text-white py-2 lg:py-4">
          Whats Teammates Says
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-2 lg:py-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardTeams />
          <CardTeams />
          <CardTeams />
        </section>
      </main>

      {/* Contact */}
      <section
        className="max-w-7xl mx-auto md:grid-col-span-2 px-4 text-center pt-6"
        id="contact"
      >
        <h1 className="font-bold text-sm text-text-secondary">CONTACT</h1>
        <p className="font-bold text-2xl text-white py-2 lg:py-4">
          Contact With Me
        </p>
      </section>

      <main className="max-w-7xl mx-auto grid md:grid-flow-col gap-4">
        <article className="md:grid-col-span-2 p-4">
          <div className="">
            <CardsCity />
            <br />
            <CardsPhone />
            <br />
            <CardsMail />
          </div>
        </article>

        <aside className="md:grid-col-span-1 p-4">
          <div className="">
            <CardsContact />
          </div>
        </aside>
      </main>

      <hr className="my-4 mx-auto max-w-7xl h-px bg-gray-500 rounded border-0" />

      <Footer />
    </>
  );
}

export default App;
