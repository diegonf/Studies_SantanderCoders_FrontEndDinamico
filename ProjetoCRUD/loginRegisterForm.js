import { addNewUserToDB, getUsersDB } from "./services.js";

const wd = window;

export const handleRegisterFormSubmit = (event) => {
  event.preventDefault();

  const email = event.target.registerEmail.value;
  const password = event.target.registerPass.value;

  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);

  if(!emailValidation.valid || !passwordValidation.valid) {
    wd.registerEmailSpan.innerText = emailValidation.msg;
    wd.registerPassSpan.innerText = passwordValidation.msg;

    setTimeout(() => {
      wd.registerEmailSpan.innerText = '';
      wd.registerPassSpan.innerText = '';
    }, 3000);

    return;
  }

  addNewUserToDB({email, password});
  wd.registerForm.reset();

  alert("Usuário cadastrado com sucesso!");
}

const validateEmail = (email) => {
  if (email === '') return { valid: false, msg: 'Email não pode ser vazio!' };

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const invalidEmail = !regex.test(email);
  if (invalidEmail) return {valid: false, msg: 'Email invalido. Email deve ser no formato email@exemplo.com' };

  const usersEmail = getUsersDB().map(item => item.email);
  console.log(usersEmail)
  if(usersEmail.includes(email)) return { valid: false, msg: 'Email já cadastrado, favor realizar login!' }

  return {valid: true, msg: ''};
}

const validatePassword = (password) => {
  if (password === '') return { valid: false, msg: 'Password não pode ser vazio!' };

  if (password.length < 3) return { valid: false, msg: 'Password precisa ter pelo menos 3 caracteres!' };

  return { valid: true, msg: '' };
}