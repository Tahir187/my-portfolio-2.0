"use client";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "../../../typings";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../sanity.utils";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  const builder = imageUrlBuilder(client);

  return (
    <div className="flex flex-col max-w-5xl items-center mx-auto mb-20 h-screen">
      <h3 className="uppercase  tracking-[16px] text-white text-2xl pt-20 mb-10">
        My Experience
      </h3>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
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
              date={new Date(experience.dateEnded).toDateString()}
              icon={<LuGraduationCap />}
              iconStyle={{
                background: "#071321",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {experience.jobTitle}
              </h3>
              <p className="font-normal !mt-0">{experience.address}</p>
              <p className="!mt-1 !font-normal text-gray-300">
                {experience.description}
              </p>
              <div className="flex space-x-3 my-3">
                {experience.technologies?.map((technology) => (
                  <img
                    key={technology._id}
                         src={builder.image(technology?.image).url()}
                    alt= "Technology Image"
                    className="h-10 w-10 rounded-full animate-pulse"
                  />
                ))}
              </div>
            </VerticalTimelineElement>
          </div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
