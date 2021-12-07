import { FC } from 'react';

import Card from "../card/card";

import "./card-list.scss";

const CardList:FC = () => (
  <div className="card-container">
    <div className="cards">
      <div className="card">
        <Card 
          frontTitle="Design" 
          frontDescribe="La démarche UX doit être intégré dans la création d'un site internet."
          backTitle="Design"
          backDescribe="L'ergonomie du site" 
        />
      </div>
      <div className="card">
        <Card 
          frontTitle="Frontend"
          frontDescribe="Je suis capable d'intégrer une maquette graphique."
          backTitle="Frontend"
          backDescribe="La partie visible de l'application" 
        />
      </div>
      <div className="card">
        <Card 
          frontTitle="Backend"
          frontDescribe="Je suis capable de mettre en place une structure backend."
          backTitle="Backend"
          backDescribe="La communication avec le serveur" 
        />
      </div>
    </div>
    <div className="cards">      
      <div className="card">
        <Card
          frontTitle="Wordpress"
          frontDescribe="Création et mise en ligne de sites web sur Wordpress."
          backTitle="Wordpress"
          backDescribe="Un célèbre manager de contenu" 
        />
      </div>
      <div className="card">
        <Card 
          frontTitle="Base de données"
          frontDescribe="Création et utilisation d'une base de données en langage SQL."
          backTitle="Base de données"
          backDescribe="Le stockage des données"
        />
      </div>
      <div className="card">
        <Card
          frontTitle="Optimisation"
          frontDescribe="Optimisation de sites, avec mise en place d'un audit."
          backTitle="Optimisation"
          backDescribe="Amélioration des performances" 
        />
      </div>
    </div>
  </div>
);

export default CardList;