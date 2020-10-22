console.log('Warsztat - walidacja formularza zapisu do Newsletter');

const newsletterForm = document.getElementById('newsletter-form');
const allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

  let txtName = document.getElementById('name');
  let txtEmail = document.getElementById('email');
  let agree1 = document.getElementById('agree-1');
  let error = document.getElementById('error');

  error.innerHTML = '';

  if (txtName.value.trim() === '') {
    let liError = document.createElement('li');
    liError.innerText = 'Wpisz imie i nazwisko!';
    error.appendChild(liError);
    console.log(liError);
  }

  if (txtEmail.value.trim() === '') {
    let liError = document.createElement('li');
    liError.innerText = 'Wpisz e-mail!';
    error.appendChild(liError);
    console.log(liError);
  }

  if (!txtEmail.value.includes('@')) {
    let liError = document.createElement('li');
    liError.innerText = 'Adres e-mail musi zawierac @!';
    error.appendChild(liError);
    console.log(liError);
  }

  if (!agree1.checked) {
    let liError = document.createElement('li');
    liError.innerText = 'Nie wyraziles zgody 1!';
    error.appendChild(liError);
  }

  if (error.children.length > 0) {
    event.preventDefault();
  }
}

const allAgree = (event) => {
  let agree1 = document.getElementById('agree-1');
  let agree2 = document.getElementById('agree-2');

  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;

  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;


  console.log(event);
  console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);
