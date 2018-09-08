import Link from "next/link";
import Footer from "./Footer";

export const PageLink = props => (
  <Link as={`/${props.id}`} href={`/page?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>
);

const Navigation = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <PageLink id="about" title="About" />
  </div>
);

const Header = () => (
  <div>
    <h1>Bulletin</h1>
    <style jsx>{`
      color: #4b4949;
      font-size: 1.5em;
    `}</style>
  </div>
);

const Layout = props => (
  <div id="layout">
    <center>
      <Header />
      <Navigation />
    </center>

    <div id="content">{props.children}</div>
    <Footer />
    <style jsx>{`
      #layout,
      #content {
        margin: 20px;
        padding: 20px;
        border: 1px solid #ddd;
      }
      color: #625f5f;
    `}</style>
    <style jsx global>
      {`
        a {
          margin: 10px;
          color: #0003ff;
        }
      `}
    </style>
  </div>
);

export default Layout;
