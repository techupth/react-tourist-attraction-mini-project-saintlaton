import React from "react";
import "./LocationGrid.css";

const imageUrls = [
  "https://images.unsplash.com/photo-1532444451477-0d79ea4b2aa3", // Eiffel Tower
  "https://images.unsplash.com/photo-1516685018646-549b3f0ad5b3", // Great Wall of China
  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6", // Machu Picchu
  "https://images.unsplash.com/photo-1563109198-9bef0a91b679", // Taj Mahal
  "https://images.unsplash.com/photo-1549888834-7c85dfaa6669", // Sydney Opera House
  "https://images.unsplash.com/photo-1517821362477-9bd9a0f4e1ea", // Statue of Liberty
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Pyramids of Giza
  "https://images.unsplash.com/photo-1483906369360-9c6341f03d0c", // Colosseum
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Christ the Redeemer
  "https://images.unsplash.com/photo-1549020182-9e3bfc1e3338", // Mount Fuji
  "https://images.unsplash.com/photo-1549888834-7c85dfaa6669", // Burj Khalifa
  "https://images.unsplash.com/photo-1563109198-9bef0a91b679", // Angkor Wat
  "https://images.unsplash.com/photo-1516685018646-549b3f0ad5b3", // Santorini
  "https://images.unsplash.com/photo-1532444451477-0d79ea4b2aa3", // Louvre Museum
];

const LocationGrid = () => {
  return (
    <section className="gallery">
      {imageUrls.map((url, index) => (
        <figure
          key={index}
          className={`gallery__item gallery__item--${index + 1}`}
        >
          <img
            src={`${url}?auto=format&fit=crop&w=500&q=60`}
            alt={`Gallery image ${index + 1}`}
            className="gallery__img"
          />
        </figure>
      ))}
    </section>
  );
};

export default LocationGrid;
