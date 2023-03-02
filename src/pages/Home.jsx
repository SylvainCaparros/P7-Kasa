import '../style/Home.css';
import * as React from "react";
import { Link, Outlet } from "react-router-dom";

const Router = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/About">A Propos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Router