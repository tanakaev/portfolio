import React from "react";
import ProjectItem from "../../components/project-item/index";
import projectsData from "../../utils/projectsData";

const ProjectList = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </>
  );
};

export default ProjectList;
