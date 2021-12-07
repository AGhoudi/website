import React from "react";

import BlueRibbon from "../blue-ribbon/blue-ribbon";
import WebsiteList from "../website-list/website-list";

import "./projects.css";

const Projects = () => (
  <section id="projects">
    <BlueRibbon title="Mes Projets" />
    <p className="projects-text">
      Lors de mon parcours, j'ai pu concevoir diverses réalisations.<br />
      Ici je met en exergue quelques projets représentatif de mon travail.
    </p>
    <WebsiteList />
  </section>
);

export default Projects;