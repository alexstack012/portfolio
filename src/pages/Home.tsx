import {
  experienceHighlights,
  profile,
  story
} from "../data/siteContent";
import Seo from '../components/Seo'

export default function Home() {
  return (
    <div className="page page--home">
      <Seo
        title="Alex Stack | Minnesota Frontend Developer for Hire"
        description="Alex Stack is a Minnesota frontend developer for hire specializing in React, TypeScript, Angular, responsive UI development, and freelance web projects."
        path="/"
        keywords={profile.seoKeywords}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.fullName,
          jobTitle: 'Frontend Developer',
          email: profile.email,
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'MN',
            addressCountry: 'US',
          },
          areaServed: profile.serviceAreas,
          knowsAbout: ['React', 'TypeScript', 'Angular', 'Frontend Development', 'Web Accessibility'],
          sameAs: profile.socialLinks
            .filter((link) => link.href.startsWith('http'))
            .map((link) => link.href),
          url: import.meta.env.VITE_SITE_URL || window.location.origin,
          description: profile.shortBio,
        }}
      />
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">
            {profile.role} based in {profile.location}
          </p>
          <h1>
            Minnesota frontend developer for hire, building thoughtful products
            with clean code and a strong UX eye.
          </h1>
          <p className="page-intro">
            I help businesses and teams ship responsive websites, React apps,
            and polished front-end features with a practical freelance mindset.
          </p>
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
            <li>Freelance-ready frontend engineering with React and TypeScript</li>
            <li>
              Local Minnesota and remote collaboration for business-focused web work
            </li>
            <li>Focused on accessibility, maintainability, and user trust</li>
          </ul>
        </aside>
      </section>

      <section className="content-grid" aria-label="Professional overview">
        <article className="surface-card section-block">
          <p className="section-label">Experience</p>
          <h2>Freelance and product engineering focus</h2>
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
