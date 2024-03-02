import React from "react";
import Project from "../projectCard/page";
import { Project as ProjectType } from "../../../typings";


type Props = {
  projects : ProjectType[];
};

const Projects = ({projects}: Props) => {
  return (
    <section className="flex flex-col items-center max-w-5xl mx-auto">
      <h3 className="uppercase  tracking-[16px] text-white text-2xl pt-20">My Projects</h3>
      <div className="mb-10 mt-10">
        {
          projects.map((project, index) =>(
            <React.Fragment key={index}>
              <Project key={project._id} project = {project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;