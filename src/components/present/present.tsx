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
      <p className="title-box">Mes langages utilisés</p>
      <div className="image-grid">
        <img className="icons" src={html} alt="html" /> 
        <img className="icons"  src={css} alt="css" /> 
        <img className="icons" src={javascript} alt="javascript" /> 
        <img className="icons" src={bootstrap} alt="bootstrap" /> 
        <img className="large-icons" src={sass} alt="sass" /> 
        <img className="icons" src={wordpress} alt="wordpress" /> 
        <img className="icons" src={php} alt="php" /> 
        <img className="icons" src={mysql} alt="mysql" /> 
        <img className="icons" src={symfony} alt="symfony" /> 
        <img className="large-icons" src={react} alt="react" /> 
        <img className="icons" src={node} alt="node" /> 
        <img className="icons" src={git} alt="git" /> 
      </div>
  </div>
  </div> 
);

export default Present;