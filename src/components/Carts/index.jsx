import {Link} from "react-router-dom"
import { logementslist } from "../../data/logements.js"
import './carts.css'

function LogementList (){
    return (
        <div className="logements">
      {logementslist.map(({ id, cover, title }) => (
        

        <div className="fiche-logement" key={id}>
          <Link to={{ pathname: '/Logement', search: `?_id=${id}` }}
        key={id}>
            <img src={cover} alt={title} className="imgL"/>
            <h3 className="timg">{title}</h3>
            </Link>
        </div>
        
      ))}
    </div>

    )

}

export default LogementList


