import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : " "}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
const NavContent = ({ setMenuOpen }) => (
  <>
    <div className="cursor"></div>
    <h2>Suraj Dhankad</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
    </div>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
    </div>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experiences
      </a>
    </div>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
    </div>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonials
      </a>
    </div>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contacts
      </a>
    </div>
    <a href="mailto:suraj.dhanked@gmail.com">
      <button>Email</button>
    </a>
  </>
);
export default Header;
