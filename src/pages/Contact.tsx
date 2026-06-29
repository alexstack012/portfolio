import { contactChannels } from '../data/siteContent'
import Seo from '../components/Seo'
import { profile } from '../data/siteContent'

export default function Contact() {
  return (
    <div className="page">
      <Seo
        title="Contact Alex Stack | Frontend Developer for Hire in Minnesota"
        description="Contact Alex Stack for freelance frontend development, React and TypeScript projects, and local or remote web development work in Minnesota."
        path="/contact"
        keywords={[
          ...profile.seoKeywords,
          'contact frontend developer Minnesota',
          'hire React developer Minnesota',
        ]}
      />
      <section className="page-header surface-card">
        <p className="section-label">Contact</p>
        <h1>Hire a Minnesota frontend developer for freelance or team-based work.</h1>
        <p className="page-intro">
          Reach out if you need help with a React app, Angular front end, UI
          cleanup, or a custom website. I&apos;m open to freelance projects,
          contract work, and full-time frontend roles.
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
