import Seo from '../components/Seo'
import { contactChannels } from '../data/siteContent'

export default function Contact() {
  return (
    <div className="page">
      <Seo page="contact" />

      <section className="page-header surface-card">
        <p className="section-label">Employment opportunities</p>
        <h1>Interested in Working Together?</h1>
        <p className="page-intro">
          I&apos;m open to full-time software engineering opportunities, including frontend-focused,
          full-stack, and related engineering roles. I&apos;m especially interested in remote teams and
          relevant Minnesota opportunities where strong Angular, TypeScript, architecture, and
          testing experience can make an impact.
        </p>
      </section>

      <section className="contact-grid" aria-label="Professional contact channels">
        {contactChannels.map((channel) => {
          const opensNewTab = channel.href.startsWith('http') || channel.href.endsWith('.pdf')
          return (
            <a
              key={channel.label}
              className="surface-card contact-card"
              href={channel.href}
              target={opensNewTab ? '_blank' : undefined}
              rel={opensNewTab ? 'noreferrer' : undefined}
            >
              <p className="section-label">{channel.label}</p>
              <h2>{channel.value}</h2>
              <span className="contact-card__cta">Open</span>
            </a>
          )
        })}
      </section>

      <section className="surface-card commercial-referral" aria-labelledby="commercial-title">
        <div>
          <p className="section-label">Commercial development services</p>
          <h2 id="commercial-title">Need Custom Software or Development Services?</h2>
          <p>
            Commercial software development, website projects, and business inquiries are handled
            through Full Stack Innovations LLC.
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
