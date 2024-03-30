import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
        A seasoned Technical Lead and MERN stack developer on a mission to transform ideas into robust digital solutions. I've honed my skills in leading development teams and architecting innovative solutions.
        As a passionate for the MERN stack, I specialize in crafting seamless, user-centric applications that leverage the power of MongoDB, Express, React, and Node.js. My journey involves not only mastering the intricacies of code but also fostering a collaborative environment that brings out the best in every team member.
          <br />
          <br />
          From building multiplayer gaming platforms to integrating crypto payments and delving into smart contract development, my expertise spans a diverse range of tech realms. I thrive on the balance between logic and creativity, consistently pushing the boundaries of what's achievable.
          <br />
          As a technical leader, I bring a wealth of experience to every project, ensuring a harmonious blend of innovation, efficiency, and quality. Join me as we embark on the exciting journey of transforming ideas into tangible, impactful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
