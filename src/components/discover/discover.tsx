import BlueRibbon from "../blue-ribbon/blue-ribbon";
import Present from "../present/present";

import "./_discover.scss";

const Discover: React.FunctionComponent = () => (
  <section id="discover">
    <BlueRibbon title="Me Découvrir" />
    <div className="content">
      <div className="content__box">
        <div className="content__text">
          <p className="content__presentation">
          Je m'appelle <span>Ali Ghoudi</span>, je suis intégrateur web et développeur d'applications.<br />
          Dans le domaine informatique depuis plusieurs années,
          je me suis spécialisé<br /> au fur et à mesure dans les langages Javascript et PHP.<br /> 
          J'utilise désormais régulièrement la librairie React et le framework Symfony.
          </p>
          <Present />
        </div>        
      </div>
    </div>
  </section>
);

export default Discover;