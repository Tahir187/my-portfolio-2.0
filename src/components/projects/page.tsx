import React from "react";
import { projectsData } from "@/lib/data";
import Project from "../projectCard/page";


type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-3xl font-medium uppercase mb-8 text-center">My Projects</h3>
      <div>
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