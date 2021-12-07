import { FC } from 'react';

import "./card.scss";

interface CardText {
  frontTitle: string,
  frontDescribe: string,
  backTitle: string,
  backDescribe: string,
}

const Card:FC<CardText> = ({frontTitle, frontDescribe, backTitle, backDescribe}) => (
  <div className="center">
    <div className="front-face">
      <div className="contents front">
        <p>{frontTitle}</p>
        <span>{frontDescribe}</span>
      </div>
    </div>
    <div className="back-face">
      <div className="contents back">
        <h2>{backTitle}</h2>
        <span>{backDescribe}</span>
      </div>
    </div>
  </div>
);

export default Card;