import { FC } from 'react';

import YellowRibbon from "../yellow-ribbon/yellow-ribbon";
import CardList from "../card-list/card-list";

import "./skills.scss";

const Skills:FC = () => (
  <section id="skills" className="skills">
    <YellowRibbon title="Mes Compétences" />
    <p className="skills__explain">
      En tant que développeur web, j'ai utilisé de nombreux langages<br />
       et ai pu développer de nombreuses compétences transverses.<br />
      Je me définirais comme un développeur fullstack, car j'aime utiliser<br />
       mes compétences en frontend, mais aussi en backend.<br />
      J'apprécie d'apprendre de nouvelles choses et progresser<br />
       régulièrement sur de nouveaux outils.
    </p>
    <CardList />
  </section>
);

export default Skills;