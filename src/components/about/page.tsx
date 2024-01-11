"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl">About</h3>
        <div className="flex mt-[300px]">
            <motion.img src="/mtahir.jpg" alt="Tahir image" className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]" />
          <div>
            <h4>A little About me</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis natus ex, velit numquam rem unde officia cumque quae alias maiores quo odio explicabo voluptas commodi culpa, amet earum voluptatem! Molestiae?
            Debitis temporibus libero aliquam maxime! Et cumque maiores, nulla deleniti at, vero amet vitae sequi ducimus, error obcaecati similique voluptatibus ad deserunt? Perferendis ex iure aut adipisci eligendi explicabo suscipit.
            Reprehenderit quos corrupti totam veniam itaque, nam nesciunt ex ipsa assumenda voluptas, id quam molestiae aut quae. Voluptates minima, distinctio necessitatibus commodi odit magnam, iusto natus eveniet et iste animi.
            Ipsum et animi voluptate corporis possimus nemo porro officia non ea rerum quaerat ipsam adipisci voluptates dicta repellat illo ratione molestias unde mollitia ex expedita architecto, beatae itaque. Eaque, natus?
            Alias enim voluptatum, asperiores, corporis atque dicta eos modi debitis incidunt labore sit aut autem et accusantium blanditiis suscipit fuga consequatur nobis cupiditate quas. Doloribus, voluptates est? A, tempore harum!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
