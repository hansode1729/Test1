const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "ありがとうございます！このフォームはまだ送信先が設定されていません。実際にメッセージを受け取るには、Formspree や Netlify Forms などのサービスと連携してください。";
    form.reset();
  });
}
