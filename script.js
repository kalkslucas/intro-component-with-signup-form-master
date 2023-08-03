const form = document.getElementById('formulario')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', formulario)

function formulario(event) {
  event.preventDefault()
  checkInputs()

}
 
function checkInputs() {
  //pegar os "values" dos inputs
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  let variavel = 0

  if (firstNameValue === '') {
    //mostra erro
    //adiciona classe de erro
    setErrorFor(firstName, `First Name cannot be empty`)
  } else {
    retornaPadrao(firstName)
    variavel++
  }

  if (lastNameValue === '') {
    //mostra erro
    //adiciona classe de erro
    setErrorFor(lastName, `Last Name cannot be empty`)
  } else {
    retornaPadrao(lastName)
    variavel++
  }
 
  if (emailValue === '') {
    //mostra erro
    //adiciona classe de erro
    setErrorFor(email, `It's not an email`)
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, `Email is not valid`)
  } else {
    retornaPadrao(email)
    variavel++
  }
    
  if (passwordValue === '') {
    //mostra erro
    //adiciona classe de erro
    setErrorFor(password, `Password cannot be empty`)
  } else {
    retornaPadrao(password)
    variavel++
  }
  
  console.log(variavel);
  if(variavel === 4){
    $('#modal-de-confirmacao').modal('show')
  } else {
    $('#modal-de-confirmacao').modal('hide')
  }
  
}

function setErrorFor(input, mensagem) {
  const inputs = input.parentElement //inputs
  const erro = inputs.querySelector('.erro')

  
  //adiciona a mensagem de erro
  erro.innerText = mensagem

  //adiciona classe de erro
  inputs.className = 'inputs container-erro'

}

function retornaPadrao(input) {
  let inputs = input.parentElement //inputs
  inputs.className = 'inputs'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



