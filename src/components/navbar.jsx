import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">anbtech.xyz</Link>
      </div>
      <a href="https://films.anbtech.xyz/" className="cta-btn">
        Watch Films
      </a>
    </div>
  );
};

export default Navbar;
