import { Link } from "react-router-dom";
import '../sass/404.scss'

export default function NoMatch(props) {
    return (
      <div className="housing">
        <h2 className="housing_title">404</h2>
        <p className="housing_line">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="housing_link">Retourner sur la page d'accueil</Link>
      </div>
    );
  }