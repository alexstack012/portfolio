import "../App.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <button id="open-sidebar-button" className={isOpen ? "dontShow" : "show menuBtn"} onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>

      <nav id="navbar" className={isOpen ? "show" : ""}>
        <ul className="navbar">
            <li className="closeBtn"><CloseIcon onClick={() => setIsOpen(false)} /></li>
            <li className="home-link"><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
