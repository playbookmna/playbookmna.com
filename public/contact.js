const dialog = document.getElementById('contact-dialog');
const form = document.getElementById('contact-form');
const feedback = document.getElementById('contact-feedback');
const title = document.getElementById('contact-title');
const intro = dialog.querySelector('.form-intro');
const blank = { title: title.textContent, intro: intro.textContent };
let submissionId;
let startedAt;
document.getElementById('contact-open').addEventListener('click', () => { startedAt ||= Date.now(); dialog.showModal(); });
document.getElementById('contact-close').addEventListener('click', () => dialog.close());
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  if (button.disabled) return;
  button.disabled = true;
  button.textContent = 'Sending…';
  feedback.textContent = '';
  submissionId ||= crypto.randomUUID();
  const fields = Object.fromEntries(new FormData(form));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch('https://api.playbookmna.com/api2/forms/pbf_tY2Th3AqVQMFwGod5AGdDCB9YFElLRUu', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...fields, id: submissionId, inquiry_type: 'other', _started: startedAt }),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || !result.received) throw new Error(result.error || 'Unable to send your message. Please try again.');
    form.hidden = true;
    title.textContent = 'Thanks, we’ve got it.';
    intro.textContent = `Your message is with the Playbook team. We’ll reply to ${fields.email}.`;
    form.reset();
    submissionId = undefined;
  } catch (error) {
    feedback.textContent = error.name === 'AbortError' || error instanceof TypeError
      ? 'Could not confirm delivery. Your message is still here—please try again.' : error.message;
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
    button.textContent = 'Send message';
  }
});
// Opening it again after a send shows a fresh form.
dialog.addEventListener('close', () => {
  if (!form.hidden) return;
  form.hidden = false;
  title.textContent = blank.title;
  intro.textContent = blank.intro;
  feedback.textContent = '';
});
