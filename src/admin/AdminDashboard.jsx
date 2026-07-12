import { useEffect, useState } from 'react';
import { api } from './api.js';
import WorkItem from './WorkItem.jsx';

const emptyContact = { email: '', phone: '', instagram: '', address: '' };
const emptyWorkForm = { title: '', desc: '', outcome: '', tags: '' };

export default function AdminDashboard({ onLogout }) {
  const [contact, setContact] = useState(emptyContact);
  const [contactError, setContactError] = useState('');

  const [works, setWorks] = useState([]);
  const [workForm, setWorkForm] = useState(emptyWorkForm);
  const [workError, setWorkError] = useState('');

  useEffect(() => {
    api('/api/contact').then(setContact).catch(() => {});
    loadWorks();
  }, []);

  function loadWorks() {
    api('/api/works').then(setWorks).catch(() => {});
  }

  async function handleLogout() {
    await api('/api/admin/logout', { method: 'POST' }).catch(() => {});
    onLogout();
  }

  async function saveContact(e) {
    e.preventDefault();
    setContactError('');
    try {
      const updated = await api('/api/contact', { method: 'PUT', body: JSON.stringify(contact) });
      setContact(updated);
    } catch (err) {
      setContactError(err.message);
    }
  }

  async function addWork(e) {
    e.preventDefault();
    setWorkError('');
    const { title, desc, outcome, tags } = workForm;
    if (!title.trim() || !desc.trim()) {
      setWorkError('Title and description are required.');
      return;
    }
    try {
      await api('/api/works', {
        method: 'POST',
        body: JSON.stringify({
          title: title.trim(),
          desc: desc.trim(),
          outcome: outcome.trim(),
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        }),
      });
      setWorkForm(emptyWorkForm);
      loadWorks();
    } catch (err) {
      setWorkError(err.message);
    }
  }

  async function deleteWork(id) {
    if (!confirm('Delete this work entry?')) return;
    await api(`/api/works/${id}`, { method: 'DELETE' });
    loadWorks();
  }

  async function updateWork(id, fields) {
    await api(`/api/works/${id}`, { method: 'PUT', body: JSON.stringify(fields) });
    loadWorks();
  }

  return (
    <div className="wrap">
      <div className="top-row">
        <div>
          <h1>Newbie Tech Admin</h1>
          <p className="sub">Manage Work case studies and contact info shown on the site.</p>
        </div>
        <button className="secondary" onClick={handleLogout}>Log Out</button>
      </div>

      <div className="card">
        <h2>Contact Info</h2>
        <form onSubmit={saveContact}>
          {contactError && <div className="error">{contactError}</div>}
          <label>Email</label>
          <input value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder="you@company.com" />
          <label>Phone</label>
          <input value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} placeholder="+91 98765 43210" />
          <label>Instagram URL</label>
          <input value={contact.instagram} onChange={e => setContact({ ...contact, instagram: e.target.value })} placeholder="https://instagram.com/yourhandle" />
          <label>Address</label>
          <input value={contact.address} onChange={e => setContact({ ...contact, address: e.target.value })} placeholder="City, Country" />
          <button type="submit">Save Contact Info</button>
        </form>
      </div>

      <div className="card">
        <h2>Add Work Case Study</h2>
        <form onSubmit={addWork}>
          {workError && <div className="error">{workError}</div>}
          <label>Title</label>
          <input value={workForm.title} onChange={e => setWorkForm({ ...workForm, title: e.target.value })} placeholder="Case study title" />
          <label>Description</label>
          <textarea value={workForm.desc} onChange={e => setWorkForm({ ...workForm, desc: e.target.value })} placeholder="What was built and how" />
          <label>Outcome</label>
          <input value={workForm.outcome} onChange={e => setWorkForm({ ...workForm, outcome: e.target.value })} placeholder="One-line result" />
          <label>Tags (comma-separated)</label>
          <input value={workForm.tags} onChange={e => setWorkForm({ ...workForm, tags: e.target.value })} placeholder="React, Node.js, AWS" />
          <button type="submit">Add Work</button>
        </form>
      </div>

      <div className="card">
        <h2>Existing Work</h2>
        {works.length === 0 && <p className="sub">No work entries yet.</p>}
        {works.map(w => (
          <WorkItem key={w.id} work={w} onDelete={deleteWork} onSave={updateWork} />
        ))}
      </div>
    </div>
  );
}
