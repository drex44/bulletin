import News from "../components/News";
import Layout from "../components/Layout";
import PrismicConfig from "../prismic-configuration";
import Prismic from "prismic-javascript";

const Index = props => (
  <Layout>
    <h1>Top Notices</h1>
    <div>
      <News news={props.news} />
    </div>
    <style jsx>
      {`
        h1 {
          text-decoration: underline;
        }
      `}
    </style>
  </Layout>
);

Index.getInitialProps = async function(context) {
  let api = await Prismic.api(PrismicConfig.apiEndpoint);
  let response = await api.query(
    Prismic.Predicates.at("document.type", "news"),
    { orderings: "[news.sequence desc]" }
  );
  if (response) {
    return { news: response.results };
  } else return {};
};

export default Index;
