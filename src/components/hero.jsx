import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      {/*<Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />*/}
      <div className="hero-text">
        <h1>Welcome👋</h1>
        <p>
          Click
          <a href="https://films.anbtech.xyz/">
            <b> here </b>
          </a>
          for films.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/arenman7"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
