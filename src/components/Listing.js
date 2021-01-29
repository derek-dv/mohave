import { Star } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function Listing() {
  return (
    <div className="listings__building">
      <Link to="/listings/12" className="listings__building__link">
        <img src="/images/buildings/Townhouse1.jpg" alt="TownHouse" />
        <div className="listings__buiding__description">
          <h4 className="listings__decsription">Townhouse</h4>
          <div className="listings__rating">
            <Star style={{ color: "gold" }} />
            <Star style={{ color: "gold" }} />
            <Star style={{ color: "gold" }} />
            <Star style={{ color: "gold" }} />
            <Star style={{ color: "gold" }} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Listing;
