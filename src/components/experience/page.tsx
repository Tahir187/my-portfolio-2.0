"use client";
import { experiencesData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col max-w-5xl items-center mx-auto mb-20 ">
      <h3 className="uppercase  tracking-[16px] text-white text-2xl pt-20 mb-10">
        My Experience
      </h3>
      <VerticalTimeline>
        {experiencesData.map((experienceItem, index) => (
          <div key={index} className="">
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experienceItem.date}
              icon={experienceItem.icon}
              iconStyle={{
                background: "#071321",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {experienceItem.title}
              </h3>
              <p className="font-normal !mt-0">{experienceItem.location}</p>
              <p className="!mt-1 !font-normal text-gray-300">
                {experienceItem.description}
              </p>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
