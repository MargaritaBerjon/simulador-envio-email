const email = document.getElementById('email');
const subject = document.getElementById('asunto');
const message = document.getElementById('mensaje');
const btnSEnd = document.getElementById('enviar');


document.addEventListener('DOMContentLoaded', btnDisable);

email.addEventListener('blur', btnEnable);
subject.addEventListener('blur', btnEnable);
message.addEventListener('blur', btnEnable);



function btnDisable() {
  btnSEnd.disabled = true;
}


function btnEnable() {
  fieldValidated(this);
  if (email.value !== '' && subject.value !== '' && message.value !== '') {
    btnSEnd.disabled = false;
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