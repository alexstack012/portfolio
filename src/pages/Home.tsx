import {
  experienceHighlights,
  profile,
  story
} from "../data/siteContent";

export default function Home() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">
            {profile.role} based in {profile.location}
          </p>
          <h1>
            Building thoughtful products with clean code and a strong front-end
            eye.
          </h1>
          <p className="hero__summary">{profile.summary}</p>
          <div className="action-row">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                className={`button-link${link.label === "Email" ? " button-link--secondary" : ""}`}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="hero__card surface-card" aria-label="Quick overview">
          <p className="hero__card-label">Snapshot</p>
          <h2>{profile.fullName}</h2>
          <ul className="detail-list">
            <li>Frontend engineering with modern React and TypeScript</li>
            <li>
              Experience translating requirements into polished interfaces
            </li>
            <li>Focused on accessibility, maintainability, and user trust</li>
          </ul>
        </aside>
      </section>

      <section className="content-grid" aria-label="Professional overview">
        <article className="surface-card section-block">
          <p className="section-label">Experience</p>
          <h2>Engineering focus</h2>
          <div className="stack-text">
            {experienceHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
        <section className="surface-card section-block section-block--wide">
          <p className="section-label">About</p>
          <h2>My path into software</h2>
          <div className="stack-text">
            {story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
