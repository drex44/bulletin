import React from "react";
import PrismicConfig from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText, Link } from "prismic-reactjs";

const Article = props => {
  let article = props.article;

  var target = {};

  if (article.data.link.target) {
    target = {
      target: article.data.link.target,
      rel: "noopener"
    };
  }

  return (
    <div id="article">
      <h3>{RichText.asText(article.data.title)}</h3>
      {RichText.render(article.data.description, PrismicConfig.linkResolver)}

      {article.data.link && (
        <a
          href={Link.url(article.data.link, PrismicConfig.linkResolver)}
          target="_new"
          {...target}
        >
          {RichText.render(article.data.link_text, PrismicConfig.linkResolver)}
        </a>
      )}
      <style jsx>
        {`
          #article {
            padding: 20px;
            margin: 20px;
          }
        `}
      </style>
    </div>
  );
};

const News = props => {
  let news = props.news;
  let response;

  if (news) {
    response = news.map(article => <Article article={article} />);
  } else {
    response = <h4>Not Found</h4>;
  }
  return response;
};

export default News;
