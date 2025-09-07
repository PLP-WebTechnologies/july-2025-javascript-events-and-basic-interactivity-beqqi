
// Toggles a simple dark mode by changing background and text color
document.getElementById('theme-toggle').addEventListener('click', function() {
  if (document.body.style.background === 'black') {
    document.body.style.background = '';
    document.body.style.color = '';
  } else {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
  }
});

// Handles increment and decrement button clicks
let counter = 0;
const counterValue = document.getElementById('counter-value');
document.getElementById('increment-btn').addEventListener('click', function() {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById('decrement-btn').addEventListener('click', function() {
  counter--;
  counterValue.textContent = counter;
});


// Validates form fields and shows error messages
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('form-success').textContent = '';

  let valid = true;

  // Name validation: must not be empty and at least 2 characters
  const name = document.getElementById('name').value.trim();
  if (name.length < 2) {
    document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Email validation: basic regex check
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').textContent = 'Enter a valid email address.';
    valid = false;
  }

  // Password validation: at least 6 characters, one number
  const password = document.getElementById('password').value;
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById('password-error').textContent = 'Password must be 6+ chars and include a number.';
    valid = false;
  }

  if (valid) {
    document.getElementById('form-success').textContent = 'Registration successful!';
    document.getElementById('signup-form').reset();
  }
});