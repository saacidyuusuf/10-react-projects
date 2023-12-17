import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navhaye">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Value">value</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
