import React from "react";
import ProjectList from "../../components/project-list/index";
import styles from "../../assets/styles/Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <ProjectList />
    </section>
  );
};

export default Projects;
