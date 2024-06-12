import "./LocationCard.css";
import { useState } from "react";
import CopyLink from "../assets/copylink.svg";

function LocationCard() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi illum quas laboriosam nulla tenetur expedita sed, obcaecati, eius asperiores dolorum ipsa sit aperiam at nam voluptas fugit labore, modi natus!";
  const previewText = text.slice(0, 100);

  return (
    <article className="article-container">
      <figure>
        <img src="https://picsum.photos/400/300" alt="Dummy" />
      </figure>
      <section>
        <h1>คู่มือเที่ยวเกาะช้าง</h1>
        <p>
          {showFullText ? text : previewText}
          {!showFullText && text.length > 100 && <span>...</span>}
        </p>
        <a onClick={toggleText} style={{ cursor: "pointer" }}>
          {showFullText ? "ย่อข้อความ" : "อ่านต่อ"}
        </a>
        <span>
          <p>หมวด </p>
          <p>เกาะ</p>
        </span>
        <div className="additional-layout">
          <figure className="additional-img--layout">
            <div className="additional-img">
              <img src="https://picsum.photos/200/300" alt="Dummy" />
            </div>
            <div className="additional-img">
              <img src="https://picsum.photos/200/300" alt="Dummy" />
            </div>
            <div className="additional-img">
              <img src="https://picsum.photos/200/300" alt="Dummy" />
            </div>
          </figure>
          <div className="additional-copy-link">
            <img src={CopyLink} alt="Copy Link" />
          </div>
        </div>
      </section>
    </article>
  );
}

export default LocationCard;
