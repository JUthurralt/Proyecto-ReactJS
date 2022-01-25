import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import CartWidget from "../Cart/CartWidget";


const NavBar = () => {
  return (
    <nav>
      <div className="menu">
        <div className="brand">
          <Link to="/">
            <h1>Lupetto</h1>
          </Link>
        </div>
        <div className="ul">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/categoria">
              <li>Productos</li>
            </Link>
            <Link to="/categoria/Adidas">
              <li>Adidas</li>
            </Link>
            <Link to="/categoria/Nike">
              <li>Nike</li>
            </Link>
            <Link to="/categoria/Puma">
              <li>Puma</li>
            </Link>
            <Link to="/categoria/Vans">
              <li>Vans</li>
            </Link>
            <Link to="/cart">
              {/* <div> */}
                <CartWidget></CartWidget>
              {/* </div> */}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
