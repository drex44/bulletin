import { PageLink } from "./Layout";

const Navigation = () => (
  <div>
    <PageLink id="privacy" title="Privacy policy" />
    <PageLink id="terms" title="Terms and condition" />
    <PageLink id="about" title="About" />
    <a
      href="https://medium.com/@dhanraj_acharya/host-your-dynamic-website-without-spending-a-penny-d1ba91501a62"
      target="_new"
    >
      Tutorial on Medium
    </a>
  </div>
);

const Footer = props => (
  <div id="layout">
    <center>
      <Navigation />
    </center>
    {props.children}
    <style jsx>{`
      #layout {
        margin-top: 50px;
        padding: 20px;
        border-top: 1px solid #ddd;
      }
    `}</style>
  </div>
);

export default Footer;
