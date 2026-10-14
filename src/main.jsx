import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    number: '01',
    type: 'Product design + development',
    title: 'Orbit workspace',
    description: 'A focused command center for distributed teams to turn scattered updates into clear next steps.',
    tags: ['React', 'TypeScript', 'Product'],
    className: 'project-orbit',
    visual: (
      <div className="orbit-visual" aria-hidden="true">
        <span className="orbit-ring orbit-ring-one" />
        <span className="orbit-ring orbit-ring-two" />
        <span className="orbit-core">O</span>
        <span className="orbit-dot orbit-dot-one" />
        <span className="orbit-dot orbit-dot-two" />
      </div>
    ),
  },
  {
    number: '02',
    type: 'Frontend engineering',
    title: 'Mosaic analytics',
    description: 'An accessible analytics surface that makes the signal visible without burying people in dashboards.',
    tags: ['Next.js', 'D3.js', 'Systems'],
    className: 'project-mosaic',
    visual: (
      <div className="mosaic-visual" aria-hidden="true">
        <div className="mosaic-chart"><i /><i /><i /><i /><i /><i /></div>
        <div className="mosaic-label">+ 24.8%</div>
        <div className="mosaic-line" />
      </div>
    ),
  },
  {
    number: '03',
    type: 'Mobile experience',
    title: 'Field notes',
    description: 'A quiet mobile journal for capturing observations in the moment, even when the signal is low.',
    tags: ['React Native', 'UX writing', 'Offline'],
    className: 'project-notes',
    visual: (
      <div className="notes-visual" aria-hidden="true">
        <div className="phone-frame">
          <span className="phone-notch" />
          <div className="phone-date">WEDNESDAY, 08:42</div>
          <div className="phone-title">The first light<br />after the rain.</div>
          <div className="phone-bars"><i /><i /><i /></div>
        </div>
      </div>
    ),
  },
]

function ArrowUpRight() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function MenuIcon({ open }) {
  return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@enzo.dev')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = 'mailto:hello@enzo.dev'
    }
  }

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Enzo D Andrey Lavieri Yarid home" onClick={closeMenu}>
          <span className="brand-mark">EN</span>
          <span>enzo<span className="brand-dot">.</span>dev</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>
          <MenuIcon open={menuOpen} />
        </button>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-availability" href="mailto:hello@enzo.dev" onClick={closeMenu}>
            <span className="status-dot" /> Available for select projects
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Independent developer / São Paulo, BR</p>
            <h1>I turn complex problems into <em>clear, resilient</em> software.</h1>
            <p className="hero-summary">Hi, I’m Enzo — a product-minded developer who likes working where thoughtful design, solid engineering, and real-world usefulness meet.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
              <a className="text-link" href="#contact">Let’s talk <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Introduction details">
            <div className="hero-orbit" aria-hidden="true"><span>EN</span></div>
            <p className="aside-note">Currently exploring the space between<br /><strong>people, products &amp; technology.</strong></p>
            <div className="scroll-cue"><span>Scroll to discover</span><i /></div>
          </div>
        </section>

        <section className="signal-bar section-wrap" aria-label="What I bring">
          <span>What I bring</span>
          <div className="signal-items">
            <span>Frontend craft</span><i />
            <span>Product thinking</span><i />
            <span>Calm collaboration</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> A few things I’ve made</p>
              <h2>Selected <em>work.</em></h2>
            </div>
            <p className="section-intro">A small collection of experiments and client-side projects. Each one started with a fuzzy problem and ended with something people could use.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.number}>
                <div className="project-visual">{project.visual}<span className="project-number">/{project.number}</span></div>
                <div className="project-meta"><span>{project.type}</span><span className="meta-arrow">↗</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-stamp" aria-hidden="true"><span>Curious<br />by default</span><i>✳</i></div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A little context</p>
            <h2>Good work lives<br />between <em>disciplines.</em></h2>
            <p>I’m at my best when the brief is still taking shape. I ask a lot of questions, make the invisible visible, and care about the tiny details that make software feel natural.</p>
            <p>Over the last 7 years, I’ve helped teams ship products across fintech, education, and climate tech — usually with a small team, a big whiteboard, and an unreasonable amount of curiosity.</p>
            <a className="text-link" href="#contact">More about my approach <ArrowUpRight /></a>
          </div>
          <div className="about-list">
            <div><span>01</span><strong>Make it clear</strong><p>Good interfaces reduce the distance between a person and what they want to do.</p></div>
            <div><span>02</span><strong>Make it last</strong><p>Simple systems are easier to understand, improve, and hand over.</p></div>
            <div><span>03</span><strong>Make it human</strong><p>Technology is most useful when it respects people’s time and attention.</p></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-topline"><span>Have a good problem?</span><span>Let’s make something useful.</span></div>
          <div className="contact-content">
            <h2>Let’s make<br /><em>something</em> clear.</h2>
            <div className="contact-cta">
              <p>I’m always open to a thoughtful conversation about a new product, an awkward problem, or an idea that deserves a little more shape.</p>
              <a className="contact-email" href="mailto:hello@enzo.dev">hello@enzo.dev <ArrowUpRight /></a>
              <button className="copy-button" type="button" onClick={copyEmail}>{copied ? 'Copied to clipboard ✓' : 'Copy email address'}</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© 2024 Enzo D Andrey Lavieri Yarid</span>
        <span>Built with care &amp; a little bit of coffee.</span>
        <div className="footer-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
