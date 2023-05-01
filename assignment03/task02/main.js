const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateInputs()) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log(data);
  }
});

function validateInputs() {
  let isValid = true;
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmValue = confirmInput.value.trim();

  if (nameValue === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    isValid = false;
  } else if (!/^[a-zA-Z ]{3,}$/.test(nameValue)) {
    setErrorFor(nameInput, 'Name can only contain letters and spaces. And it must be atleast 3 chars long');
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    isValid = false;
  } else if (!/^([a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})$/.test(emailValue)) {
    setErrorFor(emailInput, 'Email is not valid');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }

  if (passwordValue === '') {
    setErrorFor(passwordInput, 'Password cannot be blank');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setErrorFor(passwordInput, 'Password must be at least 8 characters long');
    isValid = false;
  } else {
    setSuccessFor(passwordInput);
  }

  if (confirmValue === '') {
    setErrorFor(confirmInput, 'Please confirm your password');
    isValid = false;
  } else if (passwordValue !== confirmValue) {
    setErrorFor(confirmInput, 'Passwords do not match');
    isValid = false;
  } else {
    setSuccessFor(confirmInput);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.error-message');
  input.classList.add('invalid');
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  input.classList.remove('invalid');
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.innerText = '';
}
