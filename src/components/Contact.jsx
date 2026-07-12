import { useEffect, useState } from 'react';
import { ENGAGEMENT_TYPES, FORM_ENDPOINT } from '../data.js';
import { API_BASE } from '../config.js';

function buildContactLinks(contact) {
  const links = [];
  if (contact.email) links.push({ icon: '✉', label: contact.email, href: `mailto:${contact.email}` });
  if (contact.phone) links.push({ icon: '☎', label: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` });
  if (contact.instagram) links.push({ icon: '📷', label: 'Instagram', href: contact.instagram });
  if (contact.address) links.push({ icon: '📍', label: contact.address, href: null });
  return links;
}

export default function Contact({ onLoaded }) {
  const [contact, setContact] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/api/contact`)
      .then(res => (res.ok ? res.json() : {}))
      .catch(() => ({}))
      .then(data => {
        if (!cancelled) setContact(data || {});
      })
      .finally(() => {
        if (!cancelled) onLoaded?.();
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    if (!data.name || !data.email || !data.type || !data.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');

    if (!FORM_ENDPOINT) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ ...data, submitted: new Date().toISOString() }),
      });
      setStatus('sent');
    } catch {
      setError('Something went wrong. Please email us directly.');
      setStatus('idle');
    }
  }

  const links = buildContactLinks(contact);

  return (
    <section id="contact" className="sec">
      <div className="eyebrow reveal">Contact</div>
      <h2 className="stitle reveal">Ready to build<br /><em>something great?</em></h2>
      <p className="sdesc reveal">Tell us about your project, we'll scope it, quote it, and deliver the full stack.</p>

      <div id="contact-body">
        <div className="contact-layout">
          <div className="reveal">
            <div className="cinfo">
              <h3>Let's build together</h3>
              <p>Whether you need a React frontend, a Java backend, an AI-powered feature, or the
                 complete product end-to-end, we'd love to hear about it.</p>
              <div className="clinks">
                {links.map(l => (
                  <a key={l.label} className="clink" href={l.href || '#'} onClick={l.href ? undefined : (e) => e.preventDefault()}>
                    <div className="clink-icon">{l.icon}</div>{l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" id="form-mount">
            {status === 'sent' ? (
              <div className="cform" style={{ textAlign: 'center', padding: '60px 32px' }}>
                <div className="contact-success-icon">✓</div>
                <h3 className="contact-success-title">Enquiry received</h3>
                <p className="contact-success-desc">Thank you for getting in touch. We'll review your project details and respond within 24 hours.</p>
              </div>
            ) : (
              <form className="cform" onSubmit={handleSubmit} noValidate>
                <div className="frow">
                  <div className="fg">
                    <label>Your Name</label>
                    <input name="name" placeholder="Jane Smith" required />
                  </div>
                  <div className="fg">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="jane@company.com" required />
                  </div>
                </div>
                <div className="fg">
                  <label>Engagement Type</label>
                  <select name="type" required defaultValue="">
                    <option value="">Select...</option>
                    {ENGAGEMENT_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="fg">
                  <label>Project Details</label>
                  <textarea name="message" placeholder="Describe your project, timeline, and what success looks like..." required></textarea>
                </div>
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="fsub" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
