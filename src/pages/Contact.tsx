import { contactChannels } from '../data/siteContent'

export default function Contact() {
  return (
    <div className="page">
      <section className="page-header surface-card">
        <p className="section-label">Contact</p>
        <h1>Let&apos;s talk about building thoughtful product experiences.</h1>
        <p className="page-intro">
          I&apos;m interested in frontend engineering roles where clean implementation,
          collaboration, and UX quality all matter.
        </p>
      </section>

      <section className="contact-grid" aria-label="Contact channels">
        {contactChannels.map((channel) => (
          <a
            key={channel.label}
            className="surface-card contact-card"
            href={channel.href}
            target={channel.href.startsWith('http') || channel.href.endsWith('.pdf') ? '_blank' : undefined}
            rel={channel.href.startsWith('http') || channel.href.endsWith('.pdf') ? 'noreferrer' : undefined}
          >
            <p className="section-label">{channel.label}</p>
            <h2>{channel.value}</h2>
            <span className="contact-card__cta">Open</span>
          </a>
        ))}
      </section>
    </div>
  )
}
