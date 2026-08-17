const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks! This form isn't wired up to send anywhere yet — connect it to a service like Formspree or Netlify Forms to receive real messages.";
    form.reset();
  });
}
