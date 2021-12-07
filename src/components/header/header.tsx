import './header.scss';

import avatar from "../../assets/images/avatar.png";

const Header: React.FunctionComponent = () => (
  <div id="home" className="p-5 text-center bg-light header">
    <div className="avatar">
      <div className="avatar__circle">
        <img className='avatar__picture' src={avatar} alt="main avatar" />
      </div>
    </div>
    <h1 className="mb-3 header__name">Ali Ghoudi</h1>
    <h2 className="mx-4 header__job">Développeur React-Symfony</h2>
    <p className="mx-3 header__describe">Passionné par le domaine informatique et la création de sites internet,<br /> mes réalisations m'ont permis de développer mes compétences et ma créativité.</p>
    <a  href="#projects" className="btn btn-outline-dark mx-4 header__button">Voir mes projets</a>     
  </div>
);

export default Header;