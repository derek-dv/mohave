import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing(props) {
  return (
    <div
      style={{ backgroundImage: "url(./images/screen.png)" }}
      className="landing"
    >
      <div className="overlay"></div>
      <div className="landing__content">
        <div className="landing__left">
          <h2 className="landing__heading">What We Do</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
            fuga. Inventore, ipsum pariatur facilis eos doloremque, dolorem quo
            itaque quibusdam repudiandae alias atque quas impedit, magnam
            perferendis sint doloribus maxime tempora fuga neque. Hic magni iste
            corporis sint consequuntur excepturi laudantium. Quo fugiat ipsum
            nam qui voluptates repudiandae fugit culpa asperiores dolor optio?
            Quisquam, perferendis labore alias neque tempora eligendi veritatis
            error dolorum cupiditate nesciunt cum obcaecati similique in ea
            dolores nobis placeat natus harum corporis dolorem laudantium quod
            expedita!
          </p>
          <Link to="/listings" className="landing__button">
            View Available Houses
          </Link>
        </div>
        <div className="landing__right">
          <h2 className="landing__heading">Sign In</h2>
          <form>
            <input
              className="landing__right__input"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="landing__right__input"
              type="password"
              placeholder="Password"
              required
            />

            <button className="landing__button" type="submit">
              Sign In
            </button>
            <p>
              <small>
                Don't have an account? <Link to="/">register</Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Landing;
