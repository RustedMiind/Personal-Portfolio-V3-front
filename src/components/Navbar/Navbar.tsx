import { useSelector } from "react-redux";
import DelayedLink from "../delayed-link/DelayedLink";
import "./navbar.scss";
import { adminType } from "../../redux/reducers/adminSlice";

function Navbar() {
  const admin = useSelector((state: { admin: adminType }) => state.admin);
  return (
    <nav className="navbar">
      <h2 className="left">
        {admin.isAdmin ? (
          <DelayedLink to="/admin">Hello {admin.name}</DelayedLink>
        ) : (
          "Ali Soliman"
        )}
      </h2>
      <ul className="right def">
        <li>
          <DelayedLink to="/">Home</DelayedLink>
        </li>
        {/* <li>
          <DelayedLink to="/about">About</DelayedLink>
        </li> */}
        {/* <li>
          <DelayedLink to="/works">Works</DelayedLink>
        </li> */}
        <li>
          <DelayedLink to="/contact">Contact</DelayedLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
