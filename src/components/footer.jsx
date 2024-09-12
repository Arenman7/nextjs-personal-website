const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} anbtech.xyz</p>
        <div className="social_icons">
          <a
            href="https://github.com/Arenman7"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
