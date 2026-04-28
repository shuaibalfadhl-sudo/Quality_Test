import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 700)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Sales</h2>
        <div className="contact-card">
          <form className="form form-grid" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" className="input" placeholder="Your full name" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="input" placeholder="you@company.com" required />
            </div>

            <div className="input-group full">
              <label htmlFor="company">Company (optional)</label>
              <input id="company" name="company" className="input" placeholder="Organization or plant" />
            </div>

            <div className="input-group full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="input" rows="5" placeholder="How can we help?" />
            </div>

            <div className="form-actions">
              <small className="helper">We reply within 2 business days. No spam.</small>
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status === 'sent' && <div className="success">Thanks — we'll be in touch shortly.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
