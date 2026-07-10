import { Component } from './Component.js';
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

export class Contact extends Component {
  async init() {
    if (!this.el) return this;
    try {
      const res = await fetch(`${API_BASE}/api/contact`);
      this._contact = res.ok ? await res.json() : {};
    } catch {
      this._contact = {};
    }
    this.el.innerHTML = this.render();
    this.bindEvents();
    return this;
  }

  _formHtml() {
    const options = ENGAGEMENT_TYPES.map(t => `<option>${t}</option>`).join('');
    const links   = buildContactLinks(this._contact || {}).map(l => `
      <a class="clink" href="${l.href || '#'}" ${l.href ? '' : 'onclick="return false"'}>
        <div class="clink-icon">${l.icon}</div>${l.label}
      </a>`).join('');

    return `
      <div class="contact-layout">
        <div class="reveal">
          <div class="cinfo">
            <h3>Let's build together</h3>
            <p>Whether you need a React frontend, a Java backend, an AI-powered feature, or the
               complete product end-to-end, we'd love to hear about it.</p>
            <div class="clinks">${links}</div>
          </div>
        </div>
        <div class="reveal" id="form-mount">
          <form class="cform" id="contact-form" novalidate>
            <div class="frow">
              <div class="fg">
                <label>Your Name</label>
                <input name="name" placeholder="Jane Smith" required />
              </div>
              <div class="fg">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="jane@company.com" required />
              </div>
            </div>
            <div class="fg">
              <label>Engagement Type</label>
              <select name="type" required>
                <option value="">Select...</option>
                ${options}
              </select>
            </div>
            <div class="fg">
              <label>Project Details</label>
              <textarea name="message" placeholder="Describe your project, timeline, and what success looks like..." required></textarea>
            </div>
            <div class="form-error" id="form-error" style="display:none"></div>
            <button type="submit" class="fsub" id="fsub-btn">Send Enquiry</button>
          </form>
        </div>
      </div>
    `;
  }

  _successHtml() {
    return `
      <div class="cform" style="text-align:center;padding:60px 32px">
        <div class="contact-success-icon">✓</div>
        <h3 class="contact-success-title">Enquiry received</h3>
        <p class="contact-success-desc">Thank you for getting in touch. We'll review your project details and respond within 24 hours.</p>
      </div>`;
  }

  render() {
    return `
      <div class="eyebrow reveal">Contact</div>
      <h2 class="stitle reveal">Ready to build<br><em>something great?</em></h2>
      <p class="sdesc reveal">Tell us about your project, we'll scope it, quote it, and deliver the full stack.</p>
      <div id="contact-body">${this._formHtml()}</div>
    `;
  }

  bindEvents() {
    this.el.addEventListener('submit', async e => {
      if (e.target.id !== 'contact-form') return;
      e.preventDefault();

      const form   = e.target;
      const btn    = this.find('#fsub-btn');
      const errBox = this.find('#form-error');
      const data   = Object.fromEntries(new FormData(form));

      if (!data.name || !data.email || !data.type || !data.message) {
        errBox.textContent = 'Please fill in all fields.';
        errBox.style.display = 'block';
        return;
      }
      errBox.style.display = 'none';

      if (!FORM_ENDPOINT) {
        this.find('#form-mount').innerHTML = this._successHtml();
        return;
      }

      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify({ ...data, submitted: new Date().toISOString() }),
        });
        this.find('#form-mount').innerHTML = this._successHtml();
      } catch {
        errBox.textContent = 'Something went wrong. Please email us directly.';
        errBox.style.display = 'block';
        btn.textContent = 'Send Enquiry';
        btn.disabled = false;
      }
    });
  }
}
