import { Link } from "react-router-dom";
import './css/Nav.css'

function Nav() {
  return (
    <div className="Nav">
      <Link to={"/"}>
        <p>⌂</p>
      </Link>
    </div>
  );
}

export default Nav;
