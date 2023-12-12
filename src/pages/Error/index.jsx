import {Link} from "react-router-dom"
import "./error.css"

function Error() {
    return (
      <div className="erreur">
        <h1 className="erreurtitre">404</h1>
        <p className="erreurmsg"> Oups ! La page que vous demandez n'existe pas. </p>
        <div className="erreurmainpage">
          <Link className="link" to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>
        
      </div>
    )
  }
  
  export default Error