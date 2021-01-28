import { Star } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Listing from "../components/Listing";
import "./Listings.css";

function Listings() {
  return (
    <div className="listings">
      <div className="listings__left">
        <form>
          <input
            className="listings__search "
            type="text"
            placeholder="Search"
          />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
        <div className="listings__filter">
          <Link className="listings__filter__link" to="/listings">
            House
          </Link>
          <Link className="listings__filter__link" to="/listings">
            Condo
          </Link>
          <Link className="listings__filter__link" to="/listings">
            Town House
          </Link>
        </div>
      </div>
      <div className="listings__right">
        <h2 className="listings__heading">Top Houses</h2>
        <div className="listings__container">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </div>
    </div>
  );
}

export default Listings;
