import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[1000px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300">
          I'm a Full Stack Developer with over 4 years of experience, currently focused on blockchain technologies, smart contracts, and game development with AI integration.
          <br />
          <br />
          At Weje, I’m leading smart contract development, integrating ERC20 tokens and NFTs with Web3 games, and connecting blockchain logic to real-time gameplay experiences. I’ve worked across the full stack — from React and Next.js on the frontend to Node.js and Firebase on the backend — delivering seamless user experiences.
          <br />
          My passion lies at the intersection of decentralized technologies, interactive design, and intelligent systems.
        </p>
        <div className="mt-5 w-full mt-10">
          <h2 className="text-gray-300 text-left text-2xl mb-3 mt-8 font-semibold">Technology I'm working with:</h2>
          <ul className="skills-list">
            <li className="text-gray-300 text-left pb-2">
              <span className="skill-heading">Blockchain:</span> Solidity, Hardhat, Ethers.js, Web3.js, Chainlink
            </li>
            <li className="text-gray-300 text-left pb-2">
              <span className="skill-heading">Game Dev:</span> Unity, Phaser.js, Three.js, WebGL
            </li>
            <li className="text-gray-300 text-left pb-2">
              <span className="skill-heading">AI Integration:</span> TensorFlow.js, OpenAI API, ML logic design
            </li>
            <li className="text-gray-300 text-left pb-2">
              <span className="skill-heading">Full Stack:</span> React, Next.js, Tailwind, Node.js, Firebase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
