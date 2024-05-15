import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> WanderLusters</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"> </i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4> Project </h4>
          <a href="/">status</a>
          <a href="/">license</a>
        </div>
        <div>
          <h4> Community </h4>
          <a href="/">github</a>
          <a href="/"> project</a>
          <a href="/"> issues</a>
        </div>
        <div>
          <h4> Help</h4>
          <a href="/">support</a>
          <a href="/">contact us</a>
        </div>
        <div>
          <h4> Others </h4>
          <a href="/">Privacy policy</a>
          <a href="/">license</a>
          <a href="/">Community</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
