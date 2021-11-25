import './_header.scss';

import avatar from "../../assets/images/avatar.png";

const Header: React.FunctionComponent = () => (
  <div id="home" className="p-5 text-center bg-light">
    <div className="picture-box">
      <div className="circle">
        <img className='avatar' src={avatar} alt="main avatar" />
      </div>
    </div>
    <h1 className="mb-3 name">Ali Ghoudi</h1>
    <h2 className="mx-4 job">Développeur React-Symfony</h2>
    <p className="describe mx-3">Passionné par le domaine informatique et la création de sites internet,<br /> mes réalisations m'ont permis de développer mes compétences et ma créativité.</p>
    <a  href="#projects" className="btn btn-outline-dark mx-4 header-button">Voir mes projets</a>     
  </div>
);

export default Header;