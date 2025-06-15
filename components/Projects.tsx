"use client"

import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Weje",
    image: "/bg.jpeg",
    description:"Defi Gaming platform with the real-time video chat and game play and Sports bet tickets.",
    link: "https://weje.com/",
    type: "game"
  },
  {
    name: "Cloud Poker Night",
    image: "/bg.jpeg",
    description:" Developed Poker multiplayer game with Video call, recordings, and rail participant. advantage of running multiple table at time per events.",
    link: "https://cloudpokernight.com/",
    type: "game"
  },
  {
    name: "Scrooge Casino",
    image: "/bg.jpeg",
    description:"Developed with MERN stack and used crypto payments on its marketplace, Integrated multiple third-party games.",
    link: "https://scrooge.casino/",
    type: "game"
  },
  {
    name: "Noogata",
    image: "/bg.jpeg",
    description: "Managed and worked on the fortend of different micro frontend and services.",
    link: "https://noogata.com/",
    type: "frontend"
  },
  {
    name: "Referrizer",
    image: "/bg.jpeg",
    description: "Design the strapi structure and API that is utilized by Gatsby.",
    link: "https://referrizer.com/",
    type: "frontend"

  },
  {
    name: "RBLX Pool",
    image: "/bg.jpeg",
    description: "Gaming and betting platform build with MERN stack and uses Robux ar currency to bet.",
    link: "https://rblxpool.com/",
    type: "game"
  },
  {
    name: "Roulette-HTML",
    image: "/bg.jpeg",
    description: "Simple Roulette game build with HTML, CSS, and JS.",
    link: "https://roulette-indigame.netlify.app/",
    type: "game"
  },
  {
    name: "Remy Money",
    image: "/bg.jpeg",
    description: "A simple client onboarding process for the Remy Money app.",
    link: "https://remymoney.com/",
    type: "frotend"
  },
  {
    name: "Population Network",
    image: "/bg.jpeg",
    description: "A data collection and  crypto-wallet management platform.",
    link: "https://population-network.netlify.app/",
    type: "frotend"
  },
  {
    name: "BetsNext",
    image: "/bg.jpeg",
    description: "A casino gambling platform where user can make bets on different games.",
    link: "https://betsnext.com/",
    type: "game"
  },
  {
    name: "Day of Duel",
    image: "/bg.jpeg",
    description: "A gaming platform with level matchmaking and different games worked on Ping pong and winter games.",
    link: "https://staging.dayofduel.com/",
    type: "game"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="project-details">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <Tabs
        defaultActiveKey="All Projects"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="All Projects" title="All Projects">
          <div className="mx-auto 2xl projects-section ">
            <div className="project-row">
              {projects.map((project) => (
                   <Link
                   href={project.link}
                   rel="noopener noreferrer"
                   target="_blank"
                   className="z-[1] project-card"
                 >
                   <div className="flex-column flex">
                     <div className="p-image">
                       <Image
                         src={project.image}
                         height={150}
                         width={150}
                         alt={project.name}
                       />
                     </div>
                     <div className="p-3 p-detail">
                       <p className="text-white font-semibold text-xl">{project.name}</p>
                       <p className="text-gray-500 text-[10px]">{project.description}</p>
                     </div>
                   </div>
                 </Link>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="Games" title="Games">
          <div className=" mx-auto 2xl projects-section ">
            <div className="project-row">
              {projects.filter(p => p.type === "game").map((project) => (
                   <Link
                   href={project.link}
                   rel="noopener noreferrer"
                   target="_blank"
                   className="z-[1] project-card"
                 >
                   <div className="flex-column flex">
                     <div className="p-image">
                       <Image
                         src={project.image}
                         height={150}
                         width={150}
                         alt={project.name}
                       />
                     </div>
                     <div className="p-3 p-detail">
                       <p className="text-white font-semibold text-xl">{project.name}</p>
                       <p className="text-gray-500 text-[10px]">{project.description}</p>
                     </div>
                   </div>
                 </Link>
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default Projects;
