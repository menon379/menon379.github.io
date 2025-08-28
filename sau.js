const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  messageDiv.textContent = '';
  
  // Simple form validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    messageDiv.textContent = 'Please fill out all fields.';
    messageDiv.className = 'form-error';
    return;
  }

  // Simple email pattern test
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.className = 'form-error';
    return;
  }

  // Here you can add AJAX/fetch to submit the form data to your server or API

  // On successful submission:
  messageDiv.textContent = 'Thank you for your message! I will get back to you soon.';
  messageDiv.className = 'form-success';
  
  form.reset();
});
