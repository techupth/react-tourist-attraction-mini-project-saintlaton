import React from "react";
import "./LocationHilight.css";
import LocationCard from "./LacationCard";

function LocationHilight() {
  return (
    <>
      <div>
        <div className="location-hilight">
          <h1>เที่ยวไหนดี</h1>
          <div className="input-wrapper">
            <p className="label">ค้นหาที่เที่ยว</p>
            <div className="input-container">
              <input
                className="search-input"
                placeholder="หาที่เที่ยวแล้วไปกัน"
              />
            </div>
          </div>
        </div>
        <section className="card-container">
          <LocationCard />
        </section>
      </div>
    </>
  );
}

export default LocationHilight;
