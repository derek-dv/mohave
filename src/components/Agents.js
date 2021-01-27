import React from "react";
import { Link } from "react-router-dom";
import "./Agent.css";

function Agents() {
  return (
    <div className="agents">
      <h2 className="agents__heading">Our Top Agents</h2>
      <div className="agents__container">
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo1.png" alt="" />
          <h4>Augaust Luke</h4>
        </Link>
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo2.png" alt="" />
          <h4>Jane Piche</h4>
        </Link>
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo3.png" alt="" />
          <h4>Frank Ahmed</h4>
        </Link>
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo4.png" alt="" />
          <h4>Isabella Corner</h4>
        </Link>
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo5.png" alt="" />
          <h4>William Seymour</h4>
        </Link>
        <Link to="/" className="agents__link">
          <img className="agents__img" src="/images/photo6.png" alt="" />
          <h4>Damian Scott</h4>
        </Link>
      </div>
    </div>
  );
}

export default Agents;
