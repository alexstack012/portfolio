import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import {
  education,
  militaryExperience,
  professionalExperience,
  profile,
  technicalExpertise,
} from '../data/siteContent'

export default function Experience() {
  return (
    <div className="page page--experience">
      <Seo page="experience" />

      <section className="page-header surface-card">
        <p className="section-label">Professional experience</p>
        <h1>Engineering experience across enterprise teams and independent products.</h1>
        <p className="page-intro">
          Software Engineer specializing in Angular, TypeScript, reusable frontend architecture,
          REST API integration, and automated testing, with full-stack experience using Node.js,
          Express, and PostgreSQL.
        </p>
        <div className="action-row">
          <a
            className="button-link"
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
          >
            Download Resume (PDF)
          </a>
          <Link className="button-link button-link--secondary" to="/projects">
            View Engineering Projects
          </Link>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="professional-experience-title">
        <div className="section-heading">
          <p className="section-label">Career timeline</p>
          <h2 id="professional-experience-title">Professional Technical Experience</h2>
        </div>
        <div className="experience-timeline">
          {professionalExperience.map((experience) => (
            <article className="surface-card experience-card" key={`${experience.employer}-${experience.title}`}>
              <div className="experience-card__header">
                <div>
                  <p className="experience-card__employer">{experience.employer}</p>
                  <h3>{experience.title}</h3>
                </div>
                <div className="experience-card__meta">
                  <span>{experience.dates}</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <p className="experience-card__summary">{experience.summary}</p>
              <ul className="bullet-list">
                {experience.accomplishments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tag-row" aria-label={`${experience.title} technologies`}>
                {experience.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              {experience.links ? (
                <div className="inline-links">
                  {experience.links.map((link) =>
                    link.external ? (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} to={link.href}>
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" aria-labelledby="technical-expertise-title">
        <div className="section-heading">
          <p className="section-label">Capabilities</p>
          <h2 id="technical-expertise-title">Technical Expertise</h2>
        </div>
        <div className="expertise-grid">
          {technicalExpertise.map((group) => (
            <article className="surface-card expertise-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="experience-support-grid">
        <section className="surface-card support-card" aria-labelledby="additional-experience-title">
          <p className="section-label">Additional</p>
          <h2 id="additional-experience-title">Military Experience</h2>
          <h3>{militaryExperience.organization}</h3>
          <p className="support-card__meta">
            {militaryExperience.role} · {militaryExperience.dates}
          </p>
          <ul className="bullet-list">
            {militaryExperience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="surface-card support-card" aria-labelledby="education-title">
          <p className="section-label">Training</p>
          <h2 id="education-title">Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.institution}>
                <h3>{item.institution}</h3>
                <p className="support-card__meta">
                  {item.credential}
                  {item.date ? ` · ${item.date}` : ''}
                </p>
                {item.details.length > 0 ? (
                  <ul className="bullet-list">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="surface-card related-projects" aria-labelledby="related-projects-title">
        <div>
          <p className="section-label">Applied engineering</p>
          <h2 id="related-projects-title">Related Projects</h2>
          <p>
            The Projects page shows how these technologies and engineering practices translate into
            shipped extensions, production applications, automated testing, and deployment work.
          </p>
        </div>
        <Link className="button-link" to="/projects">
          Explore Projects
        </Link>
      </section>
    </div>
  )
}
