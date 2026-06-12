import CloseIcon from '@mui/icons-material/Close'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { useState } from 'react'
import { featuredProjects } from '../data/siteContent'

export default function Projects() {
  const [activeScreenshot, setActiveScreenshot] = useState<{
    src: string
    alt: string
    projectName: string
  } | null>(null)

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
            <div className="project-card__media" aria-label={`${project.name} screenshots`}>
              <div className="project-shot-grid">
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src} className="project-shot">
                    <button
                      type="button"
                      className="project-shot__button"
                      onClick={() =>
                        setActiveScreenshot({
                          src: screenshot.src,
                          alt: screenshot.alt,
                          projectName: project.name,
                        })
                      }
                      aria-label={`Inspect screenshot for ${project.name}`}
                    >
                      <img
                        className="project-shot__image"
                        src={screenshot.src}
                        alt={screenshot.alt}
                      />
                    </button>
                  </figure>
                ))}
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
                {project.outcomes ? 
                <section className="project-card__panel">
                  <h3>Key outcomes</h3>
                  <ul className="bullet-list">
                    {project.outcomes?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                : null}

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
                <h3>Tech Stack</h3>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <div className="action-row">
                {project.repositoryPrivate ? (
                  <span className="button-link button-link--disabled" aria-disabled="true">
                    Github Repo (Private)
                  </span>
                ) : (
                  <a
                    className="button-link"
                    href={project.repositoryHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <Dialog
        open={Boolean(activeScreenshot)}
        onClose={() => setActiveScreenshot(null)}
        maxWidth="lg"
        fullWidth
        aria-labelledby="project-screenshot-preview-title"
        PaperProps={{ className: 'project-dialog__paper' }}
        slotProps={{
          backdrop: {
            className: 'project-dialog__backdrop',
          },
        }}
      >
        <IconButton
          className="project-dialog__close"
          aria-label="Close screenshot preview"
          onClick={() => setActiveScreenshot(null)}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className="project-dialog__content">
          {activeScreenshot ? (
            <img
              className="project-dialog__image"
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}
