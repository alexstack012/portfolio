import { featuredProjects } from '../data/siteContent'

export default function Projects() {
  return (
    <div className="page">
      <section className="page-header surface-card">
        <p className="section-label">Projects</p>
        <h1>Selected work that shows how I structure products and front-end systems.</h1>
        <p className="page-intro">
          Each project here is meant to read like a lightweight case study: what the
          product is, what problems it solves, and which engineering decisions shaped it.
        </p>
      </section>

      <section className="project-list" aria-label="Project case studies">
        {featuredProjects.map((project) => (
          <article key={project.name} className="surface-card project-card">
            <div className="project-card__media" aria-label={project.screenshotAlt}>
              <div className="project-shot-placeholder">
                <span className="project-shot-placeholder__label">Screenshot placeholder</span>
                <p>{project.screenshotPlaceholder}</p>
              </div>
            </div>

            <div className="project-card__content">
              <div className="project-card__header">
                <div>
                  <p className="section-label">Featured project</p>
                  <h2>{project.name}</h2>
                </div>
                <p className="project-card__status">{project.status}</p>
              </div>

              <p className="project-card__summary">{project.summary}</p>
              <p>{project.description}</p>

              <div className="project-card__meta">
                <section className="project-card__panel">
                  <h3>Key outcomes</h3>
                  <ul className="bullet-list">
                    {project.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="project-card__panel">
                  <h3>Highlights</h3>
                  <ul className="bullet-list">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="project-card__panel">
                <h3>Stack</h3>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <div className="action-row">
                <a
                  className="button-link"
                  href={project.repositoryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Placeholder repo link
                </a>
                <a
                  className="button-link button-link--secondary"
                  href={project.demoHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Placeholder demo link
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
