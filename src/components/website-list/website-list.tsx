import { FC } from 'react';

import Website from "../website/website";

import webagency from "../../assets/images/websites/webagency.webp";
import ireki from "../../assets/images/websites/ireki.webp";
import velov from "../../assets/images/websites/velov.webp";
import blog from "../../assets/images/websites/blog.webp";
import gesty from "../../assets/images/websites/gesty.webp";
import chalet from "../../assets/images/websites/chalet-caviar.webp";
import leonardo from "../../assets/images/websites/leonardo.webp";
import cats from "../../assets/images/websites/cats.webp";

import "./website-list.scss";

const WebsiteList:FC = () => (
  <div className="grid-container">
    <Website
      title="WEBAGENCY"
      link="https://www.ali-ghoudi.com/projet1/" 
      image={webagency} 
    />
    <Website 
        title="VISITEZ IREKI"
        link="https://www.ali-ghoudi.com/projet2/"
        image={ireki} 
      />
      <Website 
        title="VÉLO'V"
        link="https://www.ali-ghoudi.com/projet3/"
        image={velov} 
      />
      <Website 
        title="BLOG JEAN FORTEROCHE"
        link="https://www.ali-ghoudi.com/projet4/"
        image={blog} 
      />
      <Website
        title="GESTY"
        link="https://www.ali-ghoudi.com/projet5/web/"
        image={gesty} 
      />
      <Website 
        title="CHALETS & CAVIAR"
        link="https://www.ali-ghoudi.com/symfony/chalets-et-caviar/"
        image={chalet} 
      />
      <Website 
        title="LÉONARD DE VINCI"
        link="https://codepen.io/Link1986/full/BGbvRY"
        image={leonardo} 
      />
      <Website 
        title="TWO-CATS SHIRTS"
        link="https://codepen.io/Link1986/full/YdKEVr"
        image={cats} 
      />
  </div>
);

export default WebsiteList;