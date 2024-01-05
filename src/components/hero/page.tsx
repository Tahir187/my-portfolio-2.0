"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Muhammad Tahir",
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore>",
      "I'm a TypeScript expert, crafting beautiful code",
      "JavaScript magician, weaving spells for the web",
      "CSS artist, making websites look fantastic",
      "I use Tailwind CSS to create responsive designs",
      "I love React, creating user-friendly web interfaces",
      "Node.js pro, taming backend complexities",
      "MongoDB enthusiast, working magic with data",
      "Express.js explorer, navigating server routes",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
