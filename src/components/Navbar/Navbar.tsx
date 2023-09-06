import { useDispatch, useSelector } from "react-redux";
import DelayedLink from "../delayed-link/DelayedLink";
import "./navbar.scss";
import { adminType } from "../../redux/reducers/adminSlice";
import { useState } from "react";
import Modal from "../modal/Modal";
import { adminLogin } from "../../redux/middlewares/adminMiddleware";
import { setCookie } from "../../middlewares/cookies";

function Navbar() {
  const admin = useSelector((state: { admin: adminType }) => state.admin);
  const dispatch = useDispatch();
  console.log(admin);
  const [loginModal, setLoginModal] = useState<"visible" | "hidden">("hidden");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <nav className="navbar">
      <h2 className="left">
        {admin.isAdmin ? (
          <DelayedLink to="/admin">Hello {admin.name}</DelayedLink>
        ) : (
          <div
            onClick={() => {
              setLoginModal("visible");
            }}
          >
            Ali Soliman
          </div>
        )}
      </h2>
      {loginModal === "visible" && (
        <Modal
          close={() => {
            setLoginModal("hidden");
          }}
        >
          <>
            <h2 className="head-main">Hello Ali Soliman</h2>
            <p className="head-main">
              Welcome to your site Ali, For safety, provide accurate profile
              info to access site features.
            </p>
            <form
              className="contact-me-form"
              onSubmit={(e) => {
                e.preventDefault();
                adminLogin(dispatch, { username, password })
                  .then((result) => {
                    const res = result as adminType;
                    setLoginModal("hidden");
                    if (res.isAdmin) setCookie("jwt", res.token, 10);
                  })
                  .catch((err) => {});
              }}
            >
              <div className="section">
                <label htmlFor="username">Username</label>
                <input
                  className="input-main"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="section">
                <label htmlFor="username">Password</label>
                <input
                  className="input-main"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="btn-main" type="submit">
                Login
              </button>
            </form>
          </>
        </Modal>
      )}
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
