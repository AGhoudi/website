import { FC } from 'react';
import './_blue-ribbon.scss';

interface Ribbon {
  title: string
}

const BlueRibbon:FC<Ribbon> = ({title}) => (
  <div className="ribbon-index">
    <p className="ribbon">
      <strong className="ribbon-folds">
      {title}
      </strong>
    </p>
  </div>
);

export default BlueRibbon;