import React from "react";
import "./ListingsDetail.css";

function ListingsDetail() {
  return (
    <div className="listingsDetail">
      <div className="listingsDetail__left">
        <img src="/images/buildings/house1.jpg" alt="House" />
      </div>
      <div className="listingsDetail__right">
        <h1 className="listingsDetail_heading">Building Information</h1>
        <table>
          <thead></thead>
        </table>
      </div>
    </div>
  );
}

export default ListingsDetail;
