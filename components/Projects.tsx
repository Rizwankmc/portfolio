"use client"

import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from "next/image";
import Link from "next/link";

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
              <Link
                href="https://cloudpokernight.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="WebHR Project"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Cloud Poker Night</p>
                    <p className="text-gray-500 text-[10px]">
                      Developed Poker multiplayer game with Video call, recordings, and rail participant. advantage of running multiple table at time per events
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://scrooge.casino/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="HireSide"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Scrooge Casino</p>
                    <p className="text-gray-500 text-[10px]">
                      Developed with MERN stack and used crypto payments on its marketplace, Integrated multiple third-party games.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://noogata.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="VergeSystems"
                    />
                  </div>
                  <div className=" p-3 p-detail">
                    <p className="text-white font-semibold text-xl">
                      Noogata
                    </p>
                    <p className="text-gray-500 text-[10px]">
                      Managed and worked on the fortend of different micro frontend and services.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://business.referrizer.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image ref-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Referrizer</p>
                    <p className="text-gray-500 text-[10px]">
                      Design the strapi structure and API that is utilized by Gatsby.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://las-vegas.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image lv-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Las-vegas</p>
                    <p className="text-gray-500 text-[10px]">
                      Gaming Platform with Social Media touch build with MERN stack and PWA.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://rblxpool.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image rblx-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">RBLX Pool</p>
                    <p className="text-gray-500 text-[10px]">
                      Gaming and betting platform build with MERN stack and uses Robux ar currency to bet.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Games" title="Games">
          <div className=" mx-auto 2xl projects-section ">
            <div className="project-row">
              <Link
                href="https://cloudpokernight.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="WebHR Project"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Cloud Poker Night</p>
                    <p className="text-gray-500 text-[10px]">
                      Developed Poker multiplayer game with Video call, recordings, and rail participant. advantage of running multiple table at time per events
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://scrooge.casino/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="HireSide"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Scrooge Casino</p>
                    <p className="text-gray-500 text-[10px]">
                      Developed with MERN stack and used crypto payments on its marketplace, Integrated multiple third-party games.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://noogata.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="VergeSystems"
                    />
                  </div>
                  <div className=" p-3 p-detail">
                    <p className="text-white font-semibold text-xl">
                      Noogata
                    </p>
                    <p className="text-gray-500 text-[10px]">
                      Managed and worked on the fortend of different micro frontend and services.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://business.referrizer.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image ref-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Referrizer</p>
                    <p className="text-gray-500 text-[10px]">
                      Design the strapi structure and API that is utilized by Gatsby.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://las-vegas.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image lv-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">Las-vegas</p>
                    <p className="text-gray-500 text-[10px]">
                      Gaming Platform with Social Media touch build with MERN stack and PWA.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://rblxpool.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="z-[1] project-card"
              >
                <div className="flex-column flex">
                  <div className="p-image rblx-logo">
                    <Image
                      src="/bg.jpeg"
                      height={150}
                      width={150}
                      alt="Payoasis"
                    />
                  </div>
                  <div className="p-3 p-detail">
                    <p className="text-white font-semibold text-xl">RBLX Pool</p>
                    <p className="text-gray-500 text-[10px]">
                      Gaming and betting platform build with MERN stack and uses Robux ar currency to bet.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
};

export default Projects;
