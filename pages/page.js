import Layout from "../components/Layout";
import React from "react";
import PrismicConfig from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { withRouter } from "next/router";

class Page extends React.Component {
  render() {
    let doc = this.props.doc;
    let response;

    if (doc) {
      response = (
        <div>
          <h1>{RichText.asText(doc.data.title)}</h1>
          {RichText.render(doc.data.description, PrismicConfig.linkResolver)}
          <img alt="cover" src={doc.data.image.url} />
          <style jsx>
            {`
              img {
                width: 15em;
              }
              h1 {
                text-decoration: underline;
              }
            `}
          </style>
        </div>
      );
    } else {
      response = <h1>Not Found</h1>;
    }
    return <Layout>{response}</Layout>;
  }
}

Page.getInitialProps = async function(context) {
  let pageId = context.query.id;
  let api = await Prismic.api(PrismicConfig.apiEndpoint);
  let response = await api.getByUID("page", pageId);
  if (response) {
    return { doc: response };
  } else return {};
};

export default withRouter(Page);
