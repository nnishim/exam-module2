import React from "react";
import { SERVER_URL } from "../../api/urls";

function News({news}) {
  return (
    <ul>
      {news.map((newsItem) => {
        return (
          <li key={newsItem.id}>
            <div className="card__image-item">
              <img
                src={SERVER_URL + newsItem.image?.formats?.large?.url}
                alt=""
              />
            </div>
            <div>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
            </div>
            <div>
              <span>{newsItem.date}</span>
              <a href="#">button</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default News;
