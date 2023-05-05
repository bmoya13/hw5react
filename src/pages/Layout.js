import { Outlet, Link } from "react-router-dom";
import "../styles/Nav.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="hlink" to="/">Home</Link>
          </li>
          <li>
            <Link className="hlink" to="/pc">PC</Link>
          </li>
          <li>
            <Link className="hlink" to="/switch">Switch</Link>
          </li>
          <li>
            <Link className="hlink" to="/xbox">Xbox</Link>
          </li>
          <li>
            <Link className="hlink" to="/ps">Playstation</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;