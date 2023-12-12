import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import Etoiles from '../../components/Etoiles'
import Slide from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import { logementslist } from "../../data/logements.js"
import './logement.css';

function Logement() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('_id');
  console.log("ID récupéré :", id);

  const logement = logementslist.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  const { pictures, title, description, host, rating, location: locationInfo, equipments, tags } = logement

  return (
    <div className='PageHome'>
      <Slide images={pictures} />
      <div className='Logementinfos'>
        <div className='Titrelocationtag'>
          <h2>{title}</h2>
          <p className='Locationinf'> {locationInfo}</p>
          <div className='Tag'>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='Hostimgstars'>
          <div className='Hostimg'>
            <p className='Nom'> {host.name}</p>
            <img src={host.picture} alt={host.name} className='Imghost' />
          </div>

          <p className='Etoilesnotation'> <Etoiles rating={parseInt(rating)} /></p>
        </div>
      </div>

      <div className='collapse-data'>
        <span className='Description'>
        <Collapse title= 'Description' content={description} />
        </span>
        <span className='Equipements'>
        <Collapse title='Equipements' content= {equipments.map((subItems, sIndex) => {
                            return <li key={sIndex}> {subItems} </li>;
                        })} />
        </span>
          
      </div>
    </div>
  );
}

export default Logement;


