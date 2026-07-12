import { useState } from 'react';

export default function WorkItem({ work, onDelete, onSave }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title: work.title,
    desc: work.desc,
    outcome: work.outcome,
    tags: work.tags.join(', '),
  });

  async function save() {
    await onSave(work.id, {
      title: form.title.trim(),
      desc: form.desc.trim(),
      outcome: form.outcome.trim(),
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    });
    setEditing(false);
  }

  if (editing) {
    return (
      <div className="work-item">
        <label>Title</label>
        <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <label>Description</label>
        <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} />
        <label>Outcome</label>
        <input value={form.outcome} onChange={e => setForm({ ...form, outcome: e.target.value })} />
        <label>Tags (comma-separated)</label>
        <input value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
        <div className="actions">
          <button onClick={save}>Save</button>
          <button className="secondary" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="work-item">
      <h3>{work.title}</h3>
      <p>{work.desc}</p>
      <div className="tags">{work.outcome ? `${work.outcome} · ` : ''}{work.tags.join(', ')}</div>
      <div className="actions">
        <button className="secondary" onClick={() => setEditing(true)}>Edit</button>
        <button className="danger" onClick={() => onDelete(work.id)}>Delete</button>
      </div>
    </div>
  );
}
