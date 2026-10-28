import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { experienceHighlights, profile, story, strengths } from '../data/siteContent'

export default function Home() {
  const github = profile.socialLinks.find((link) => link.label === 'GitHub')!
  const linkedIn = profile.socialLinks.find((link) => link.label === 'LinkedIn')!

  return (
    <div className="page page--home">
      <Seo page="home" />

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">
            {profile.role} based in {profile.location}
          </p>
          <h1>Software Engineer | Angular, TypeScript & Full-Stack Development</h1>
          <p className="page-intro">
            Software Engineer with over four years of experience developing enterprise applications
            in healthcare and global financial services. I specialize in Angular, TypeScript,
            API-driven interfaces, reusable frontend architecture, and automated testing, and I
            design, build, and deploy full-stack applications and commercial software products.
          </p>
          <div className="action-row">
            <Link className="button-link" to="/experience">
              View Experience
            </Link>
            <Link className="button-link button-link--secondary" to="/projects">
              View Projects
            </Link>
            <a
              className="button-link button-link--secondary"
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className="inline-links hero__social" aria-label="Professional profiles">
            <a href={github.href} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={linkedIn.href} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero__card surface-card" aria-label="Professional snapshot">
          <p className="hero__card-label">Professional snapshot</p>
          <h2>{profile.fullName}</h2>
          <ul className="detail-list">
            <li>4+ years of professional software engineering experience</li>
            <li>Enterprise healthcare and global financial-services applications</li>
            <li>Angular, TypeScript, REST APIs, testing, and frontend architecture</li>
            <li>Independent full-stack products deployed to production</li>
          </ul>
        </aside>
      </section>

      <section className="content-grid" aria-label="Professional overview">
        <article className="surface-card section-block">
          <p className="section-label">Experience</p>
          <h2>Enterprise and product engineering</h2>
          <ul className="bullet-list">
            {experienceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="text-link" to="/experience">
            Read the full professional timeline
          </Link>
        </article>
        <article className="surface-card section-block">
          <p className="section-label">Engineering focus</p>
          <h2>Maintainable systems and software quality</h2>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="surface-card home-story" aria-labelledby="background-title">
        <div>
          <p className="section-label">Background</p>
          <h2 id="background-title">A disciplined path into software</h2>
        </div>
        <div className="stack-text">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="surface-card independent-development" aria-labelledby="independent-title">
        <div>
          <p className="section-label">Independent Software Development</p>
          <h2 id="independent-title">Full Stack Innovations LLC</h2>
          <p>
            I founded Full Stack Innovations LLC to develop commercial software products and provide
            custom software development services. This independent work extends my engineering
            experience across architecture, implementation, testing, deployment, and production
            support.
          </p>
        </div>
        <a
          className="button-link button-link--secondary"
          href="https://fullstackinnovations.com"
          target="_blank"
          rel="noreferrer"
        >
          Visit Full Stack Innovations
        </a>
      </section>
    </div>
  )
}
