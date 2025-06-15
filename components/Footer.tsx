import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-0 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                className="mx-3"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
