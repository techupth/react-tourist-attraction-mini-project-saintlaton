import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LocationHilight.css";
import LocationCard from "./LocationCard";

function LocationHilight() {
  const [inputSearch, setInputSearch] = useState("");
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${inputSearch}`
      );
      console.log(result.data.data);
      setLocations(result.data.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    getLocations();
  }, [inputSearch]);

  const handleTagClick = (tag) => {
    // Concatenate the clicked tag with the current search input value
    setInputSearch((prevInputSearch) =>
      prevInputSearch ? `${prevInputSearch} ${tag}` : tag
    );
  };

  return (
    <div>
      <div className="location-hilight">
        <h1>เที่ยวไหนดี</h1>
        <div className="input-wrapper">
          <p className="label">ค้นหาที่เที่ยว</p>
          <div className="input-container">
            <input
              className="search-input"
              placeholder="หาที่เที่ยวแล้วไปกัน"
              onChange={(e) => setInputSearch(e.target.value)}
              value={inputSearch}
            />
          </div>
        </div>
      </div>
      <section className="card-container">
        {locations.map((item) => (
          <LocationCard
            key={item.eid}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
            imgMain={item.photos[0]}
            imgSec={item.photos[1]}
            imgThird={item.photos[2]}
            imgForth={item.photos[3]}
            onTagClick={handleTagClick}
          />
        ))}
      </section>
    </div>
  );
}

export default LocationHilight;
