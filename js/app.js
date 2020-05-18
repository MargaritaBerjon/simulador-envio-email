const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const btnSEnd = document.getElementById('enviar');
const sendEmailForm = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');


document.addEventListener('DOMContentLoaded', btnDisable);

email.addEventListener('blur', btnEnable);
subject.addEventListener('blur', btnEnable);
message.addEventListener('blur', btnEnable);
btnSEnd.addEventListener('click', sendEmail);
btnReset.addEventListener('click', resetForm);

function btnDisable() {
  btnSEnd.disabled = true;
}


function btnEnable() {
  fieldValidated(this);
  if (this.type === 'email') {
    emailValidated(this);
  }
  let error = document.querySelectorAll('error')
  if (email.value !== '' && subject.value !== '' && message.value !== '') {
    if (error.length === 0) {
      btnSEnd.disabled = false;
    }
  }
}


function emailValidated(input) {
  const emailInputValue = input.value;
  if (emailInputValue.indexOf('@') !== -1) {
    input.style.borderBottomColor = 'green';
    input.classList.remove('error');
  } else {
    input.style.borderBottomColor = 'red';
    input.classList.add('error');
  }
}

function fieldValidated(input) {
  if (input.value.length > 0) {
    input.style.borderBottomColor = 'green';
    input.classList.remove('error');
  } else {
    input.style.borderBottomColor = 'red';
    input.classList.add('error');
  }
}

function sendEmail(ev) {
  const spinnerGif = document.querySelector('#spinner')
  spinnerGif.style.display = 'block';

  const sendEmailGif = document.createElement('img');
  sendEmailGif.src = './img/mail.gif';
  sendEmailGif.style.display = 'block';

  setTimeout(function () {
    spinnerGif.style.display = 'none';
    document.querySelector('#loaders').appendChild(sendEmailGif);
    setTimeout(function () {
      sendEmailGif.remove();
      sendEmailForm.reset();
      btnDisable();
    }, 4000)
  }, 3000)
  ev.preventDefault();
}

function resetForm(ev) {
  ev.preventDefault();
  sendEmailForm.reset();
}