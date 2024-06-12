import "./LocationCard.css";

import CopyLink from "../assets/copylink.svg";

function LocationCard(props) {
  const text = `${props.description}`;
  const previewText = text.slice(0, 100);

  return (
    <article className="article-container">
      <figure className="main-img">
        <img src={props.imgMain} alt="Dummy" />
      </figure>
      <section className="article-detail">
        <h1>{props.title}</h1>
        <p>{previewText} ...</p>
        <a href={props.url} target="_blank" className="read-more">
          อ่านต่อ
        </a>
        <span className="catagory">
          <p>หมวด </p>
          {props.tags.map((tag, index) => (
            <p key={index} className="catagory-detail">
              {tag}
            </p>
          ))}
        </span>
        <div className="additional-layout">
          <figure className="additional-img--layout">
            <div className="additional-img">
              <img src={props.imgSec} alt="Dummy" />
            </div>
            <div className="additional-img">
              <img src={props.imgThird} alt="Dummy" />
            </div>
            <div className="additional-img">
              <img src={props.imgForth} alt="Dummy" />
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
