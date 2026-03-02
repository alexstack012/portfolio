import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="ContactContainer">
      <Navbar />
      <div className="section-card contactContent">
        <h1 className="contactTitle">Contact</h1>
        <h2>Get in touch with me!</h2>
        <div className="section-divider" />
        <ul className="LinkRow">
          <li><a className="link" href="mailto:alex_stack012@live.com">Email</a></li>
          <li>
            <a
              className="link"
              target="_blank"
              href="/ASTACKResume.pdf"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a className="link"  target="_blank" href="https://www.linkedin.com/in/alex-stack/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
