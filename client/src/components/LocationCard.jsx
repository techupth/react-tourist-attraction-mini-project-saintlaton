import "./LocationCard.css";
import ModalImage from "react-modal-image";

import CopyLink from "../assets/copy-outline.svg";

function LocationCard(props) {
  const text = `${props.description}`;
  const previewText = text.slice(0, 100);

  const handleTagClick = (tag) => {
    // Set the clicked tag as the input search value
    props.onTagClick(tag);
  };

  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(props.url);
    alert("คุณคัดลอกลิ้งค์สถานที่ท่องเที่ยวนี้แล้ว 🏃"); // Alert message
  };

  return (
    <article className="article-container">
      <figure>
        <ModalImage
          small={props.imgMain}
          large={props.imgMain}
          alt="Main location image"
          className="main-img"
        />
      </figure>
      <section className="article-detail">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
        <p>{previewText} ...</p>
        <a
          href={props.url}
          target="_blank"
          className="read-more"
          rel="noopener noreferrer"
        >
          อ่านต่อ
        </a>
        <span className="catagory">
          <p>หมวด </p>
          {props.tags.map((tag, index) => (
            <p
              key={index}
              className="catagory-detail"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </p>
          ))}
        </span>
        <div className="additional-layout">
          <figure className="additional-img--layout">
            <div className="additional-img">
              <ModalImage
                small={props.imgSec}
                large={props.imgSec}
                alt="Additional image 1"
                className="additional-img-full"
              />
            </div>
            <div className="additional-img">
              <ModalImage
                small={props.imgThird}
                large={props.imgThird}
                alt="Additional image 2"
                className="additional-img-full"
              />
            </div>
            <div className="additional-img">
              <ModalImage
                small={props.imgForth}
                large={props.imgForth}
                alt="Additional image 3"
                className="additional-img-full"
              />
            </div>
          </figure>
          <div className="additional-copy-link">
            <div className="additional-copy-link--text">
              <p>copy link</p>
            </div>
            <img
              src={CopyLink}
              alt="Copy Link"
              className="copy-link-icon"
              onClick={handleCopyLinkClick}
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export default LocationCard;
