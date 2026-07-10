/* The backend is a separate Spring Boot app. Point this at wherever it runs. */
const API_BASE = 'http://localhost:8080';

const loginScreen = document.getElementById('login-screen');
const adminScreen  = document.getElementById('admin-screen');

async function api(path, opts) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...opts,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.status === 204 ? null : res.json();
}

function showError(id, message) {
  const el = document.getElementById(id);
  el.textContent = message;
  el.classList.remove('hidden');
}
function clearError(id) {
  document.getElementById(id).classList.add('hidden');
}

/* ── Auth ── */
async function checkSession() {
  const { loggedIn } = await api('/api/admin/me');
  if (loggedIn) {
    loginScreen.classList.add('hidden');
    adminScreen.classList.remove('hidden');
    loadContact();
    loadWorks();
  } else {
    adminScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
  }
}

document.getElementById('login-btn').addEventListener('click', async () => {
  clearError('login-error');
  const password = document.getElementById('login-password').value;
  try {
    await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
    document.getElementById('login-password').value = '';
    checkSession();
  } catch (err) {
    showError('login-error', err.message);
  }
});

document.getElementById('logout-btn').addEventListener('click', async () => {
  await api('/api/admin/logout', { method: 'POST' });
  checkSession();
});

/* ── Contact info ── */
async function loadContact() {
  const contact = await api('/api/contact');
  document.getElementById('c-email').value = contact.email || '';
  document.getElementById('c-phone').value = contact.phone || '';
  document.getElementById('c-instagram').value = contact.instagram || '';
  document.getElementById('c-address').value = contact.address || '';
}

document.getElementById('contact-save-btn').addEventListener('click', async () => {
  clearError('contact-error');
  try {
    await api('/api/contact', {
      method: 'PUT',
      body: JSON.stringify({
        email: document.getElementById('c-email').value.trim(),
        phone: document.getElementById('c-phone').value.trim(),
        instagram: document.getElementById('c-instagram').value.trim(),
        address: document.getElementById('c-address').value.trim(),
      }),
    });
  } catch (err) {
    showError('contact-error', err.message);
  }
});

/* ── Works ── */
async function loadWorks() {
  const works = await api('/api/works');
  const list = document.getElementById('works-list');
  list.innerHTML = works.map(w => `
    <div class="work-item" data-id="${w.id}">
      <h3>${escapeHtml(w.title)}</h3>
      <p>${escapeHtml(w.desc)}</p>
      <div class="tags">${(w.outcome ? escapeHtml(w.outcome) + ' · ' : '') + w.tags.map(escapeHtml).join(', ')}</div>
      <div class="actions">
        <button class="secondary edit-btn">Edit</button>
        <button class="danger delete-btn">Delete</button>
      </div>
    </div>
  `).join('') || '<p class="sub">No work entries yet.</p>';

  list.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.closest('.work-item').dataset.id;
      if (!confirm('Delete this work entry?')) return;
      await api(`/api/works/${id}`, { method: 'DELETE' });
      loadWorks();
    });
  });

  list.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => startEdit(btn.closest('.work-item'), works));
  });
}

function startEdit(itemEl, works) {
  const id = Number(itemEl.dataset.id);
  const work = works.find(w => w.id === id);
  itemEl.innerHTML = `
    <label>Title</label>
    <input class="e-title" value="${escapeAttr(work.title)}">
    <label>Description</label>
    <textarea class="e-desc">${escapeHtml(work.desc)}</textarea>
    <label>Outcome</label>
    <input class="e-outcome" value="${escapeAttr(work.outcome)}">
    <label>Tags (comma-separated)</label>
    <input class="e-tags" value="${escapeAttr(work.tags.join(', '))}">
    <div class="actions">
      <button class="save-edit-btn">Save</button>
      <button class="secondary cancel-edit-btn">Cancel</button>
    </div>
  `;
  itemEl.querySelector('.cancel-edit-btn').addEventListener('click', loadWorks);
  itemEl.querySelector('.save-edit-btn').addEventListener('click', async () => {
    await api(`/api/works/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: itemEl.querySelector('.e-title').value.trim(),
        desc: itemEl.querySelector('.e-desc').value.trim(),
        outcome: itemEl.querySelector('.e-outcome').value.trim(),
        tags: itemEl.querySelector('.e-tags').value.split(',').map(t => t.trim()).filter(Boolean),
      }),
    });
    loadWorks();
  });
}

document.getElementById('work-add-btn').addEventListener('click', async () => {
  clearError('work-error');
  const title = document.getElementById('w-title').value.trim();
  const desc = document.getElementById('w-desc').value.trim();
  const outcome = document.getElementById('w-outcome').value.trim();
  const tags = document.getElementById('w-tags').value.split(',').map(t => t.trim()).filter(Boolean);

  if (!title || !desc) {
    showError('work-error', 'Title and description are required.');
    return;
  }

  try {
    await api('/api/works', { method: 'POST', body: JSON.stringify({ title, desc, outcome, tags }) });
    document.getElementById('w-title').value = '';
    document.getElementById('w-desc').value = '';
    document.getElementById('w-outcome').value = '';
    document.getElementById('w-tags').value = '';
    loadWorks();
  } catch (err) {
    showError('work-error', err.message);
  }
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function escapeAttr(str) {
  return escapeHtml(str);
}

checkSession();
