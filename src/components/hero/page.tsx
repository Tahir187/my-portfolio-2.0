"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "../backgroundCircle/page";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../../typings";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Muhammad Tahir`,
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={"/tahir.jpg"}
        width={300}
        height={400}
        alt="hero image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-white pb-2 tracking-[12px] md:tracking-[15px] xl:tracking-[18px] ">
          Softwer Engineer
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 flex flex-col md:flex-row gap-1 animate-pulse">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
