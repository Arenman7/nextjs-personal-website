import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      {/*<Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />*/}
      <div className="hero-text">
        <h1>Welcome👋</h1>
        <p>
          This website is under construction.
        </p>
        <div className="social-icons">
          <a
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/arenman7"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href=""
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;