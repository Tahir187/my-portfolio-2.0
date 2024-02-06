import React from "react";
import { projectsData } from "@/lib/data";
import Project from "../projectCard/page";


type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col items-center max-w-5xl mx-auto">
      <h3 className="text-3xl font-medium uppercase mt-20 text-center ">My Projects</h3>
      <div className="mb-10 mt-10">
        {
          projectsData.map((project, index) =>(
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;