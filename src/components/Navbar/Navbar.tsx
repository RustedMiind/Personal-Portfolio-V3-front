import DelayedLink from "../delayed-link/DelayedLink";
import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="left">Ali Soliman</h2>
      <ul className="right def">
        <li>
          <DelayedLink to="/">Home</DelayedLink>
        </li>
        {/* <li>
          <DelayedLink to="/about">About</DelayedLink>
        </li> */}
        <li>
          <DelayedLink to="/works">Works</DelayedLink>
        </li>
        <li>
          <DelayedLink to="/contact">Contact</DelayedLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
