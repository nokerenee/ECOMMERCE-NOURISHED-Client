export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-top">
        <p>
          Monday to Friday - 9am till 5pm
          <br />
          Sunday - 9am till 1pm
          <br />
          <a
            href="https://www.flaticon.com/free-icons/instagram-logo"
            title="instagram logo icon"
          />
          <a
            href="https://www.flaticon.com/free-icons/facebook"
            title="facebook icon"
          />
          <a
            href="https://www.flaticon.com/free-icons/linkedin"
            title="linkedin icon"
          />
        </p>
        <img
          src="https://www.sigtools.co.nz/cdn/shop/collections/madeinnz2-002.png?v=1692158412"
          alt="NZ-made Logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-content-bottom">
        <img
          src="https://www.getfed.co.nz/cdn/shop/t/16/assets/CC-logos.svg?v=37829588321812024401654727524"
          alt="VISA"
          className="footer-logo"
        />
        <p>&copy; Copyright NOURISHED. 2024.</p>
      </div>
    </footer>
  );
};
