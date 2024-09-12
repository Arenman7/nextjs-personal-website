import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">anbtech.xyz</Link>
      </div>
      <a href="films.anbtech.xyz" className="cta-btn">
        Films
      </a>
    </div>
  );
};

export default Navbar;
