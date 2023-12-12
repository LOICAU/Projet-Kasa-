
import etoileCouleur from '../../assets/etoilerouge.svg';
import etoileGrise from '../../assets/etoilegrise.svg';

const etoileArray = Array(5).fill(null);

function StarCouleur() {
  return <img src={etoileCouleur} className='icone-etoile' alt='etoile-couleur' />;
}

function StarVide() {
  return <img src={etoileGrise} className='icone-etoile' alt='etoile-grise' />;
}

function Etoile({ index, rating }) {
  return index < rating ? <StarCouleur key={index} /> : <StarVide key={index} />;
}

function Etoiles({ rating }) {
  return etoileArray.map((_, index) => <Etoile key={index} index={index} rating={rating} />);
}

export default Etoiles;
