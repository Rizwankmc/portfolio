import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl projects-section ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://cloudpokernight.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
             <div className="p-image">
             <Image
                src="/cpn.png"
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
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
            <div className="p-image">
              <Image
                src="/scrooge.casino.svg"
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
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://noogata.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
            <div className="p-image">
              <Image
                src="/noogata.png"
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
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
            <div className="p-image ref-logo">
              <Image
                src="/referrizer-svg.png"
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
          </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://las-vegas.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
            <div className="p-image lv-logo">
              <Image
                src="/las-vegas.svg"
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
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
            <div className="p-image rblx-logo">
              <Image
                src="/rblx.png"
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
    </section>
  );
};

export default Projects;
