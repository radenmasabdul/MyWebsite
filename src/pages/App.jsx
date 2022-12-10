import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import {
  Cards,
  CardsServices,
  CardsProjects,
  CardTeams,
  CardsInfo,
  CardsContact,
} from "../components/Cards";
import { ButtonSosmed, ButtonsViewsAll } from "../components/Buttons";
import Footer from "../components/Footer";
import { data } from "../data/myServices";
import { datas } from "../data/myProjects";
import { testi } from "../data/testimonials";
import { sosmed } from "../data/sosmed";
import { info } from "../data/info";
import { profile } from "../data/profile";

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
          {profile.map((profile) => (
            <Profile
              key={profile.id}
              hi={profile.hi}
              firstName={profile.firstName}
              lastName={profile.lastName}
              title={profile.title}
              desc={profile.desc}
            />
          ))}
          <p className="text-white font-bold text-xl">FIND ME ON</p>
          <section className="grid grid-cols-12 md:grid-flow-col gap-1 mt-4">
            {sosmed.map((sosmed) => (
              <ButtonSosmed
                key={sosmed.id}
                img={sosmed.img}
                link={sosmed.link}
              />
            ))}
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
          {datas.map((myProjects) => (
            <CardsProjects
              key={myProjects.id}
              src={myProjects.img}
              title={myProjects.title}
              desc={myProjects.desc}
              link={myProjects.link}
            />
          ))}
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
          {testi.map((testimonials) => (
            <CardTeams
              key={testimonials.id}
              src={testimonials.img}
              desc={testimonials.desc}
              images={testimonials.images}
              job_title={testimonials.job_title}
              name={testimonials.name}
            />
          ))}
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
            {info.map((info) => (
              <CardsInfo
                key={info.id}
                src={info.img}
                link={info.link}
                information={info.information}
              />
            ))}
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
