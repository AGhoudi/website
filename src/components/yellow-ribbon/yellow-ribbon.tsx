import { FC } from 'react';

import "./yellow-ribbon.scss";

interface Ribbon {
  title: string
}

const YellowRibbon:FC<Ribbon> = ({title}) => (
  <div className="yellowribbon-index">
    <p className="yellowribbon">
      <strong className="yellowribbon-folds">
      {title}
      </strong>
    </p>
  </div>
);

export default YellowRibbon;