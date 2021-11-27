import { FC } from "react";

import "./_present.scss";

import html from "../../assets/images/logos/html.png";
import css from "../../assets/images/logos/css.png";
import javascript from "../../assets/images/logos/javascript.png";
import bootstrap from "../../assets/images/logos/bootstrap.png";
import sass from "../../assets/images/logos/sass.png";
import wordpress from "../../assets/images/logos/wordpress.png";
import php from "../../assets/images/logos/php.png";
import mysql from "../../assets/images/logos/mysql.png";
import symfony from "../../assets/images/logos/symfony.png";
import react from "../../assets/images/logos/react.png";
import node from "../../assets/images/logos/node.png";
import git from "../../assets/images/logos/git.png";

const Present:FC = () => (
  <div> 
    <div className="present">
      <p className="present__title">Mes langages utilisés</p>
      <div className="present__grid">
        <img className="present__grid--icons" src={html} alt="html" /> 
        <img className="present__grid--icons"  src={css} alt="css" /> 
        <img className="present__grid--icons" src={javascript} alt="javascript" /> 
        <img className="present__grid--icons" src={bootstrap} alt="bootstrap" /> 
        <img className="present__grid--large-icons" src={sass} alt="sass" /> 
        <img className="present__grid--icons" src={wordpress} alt="wordpress" /> 
        <img className="present__grid--icons" src={php} alt="php" /> 
        <img className="present__grid--icons" src={mysql} alt="mysql" /> 
        <img className="present__grid--icons" src={symfony} alt="symfony" /> 
        <img className="present__grid--large-icons" src={react} alt="react" /> 
        <img className="present__grid--icons" src={node} alt="node" /> 
        <img className="present__grid--icons" src={git} alt="git" /> 
      </div>
  </div>
  </div> 
);

export default Present;