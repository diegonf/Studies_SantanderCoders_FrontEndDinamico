import { updatePageDOM } from "./script.js";
import { getUsersDB, setCurrentUser } from "./services.js";

const wd = window;

export const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  if(email === '' || password === '') {
    const emailMsg = email === '' ? 'Email não pode ser vazio!' : ''
    const passwordMsg = password === '' ? 'Password não pode ser vazio' : ''
    setErrorMsg(emailMsg, passwordMsg);

    return;
  }

  const userAuthenticaded = checkUserCredentials(email, password);
  if(!userAuthenticaded) {
    setErrorMsg('', 'Usuário ou senha incorretos!');
    return;
  }

  alert("Login realizado com sucesso!")
  setCurrentUser(email);
  wd.loginForm.reset();

  updatePageDOM();
}

const setErrorMsg = (emailMsg, passwordMsg) => {
  wd.loginEmailSpan.innerText = emailMsg;
  wd.loginPasswordSpan.innerText = passwordMsg;

  setTimeout(() => {
    wd.loginEmailSpan.innerText = '';
    wd.loginPasswordSpan.innerText = '';
  }, 3000);
}

const checkUserCredentials = (email, password) => {
  const users = getUsersDB();
  const user = users.find(item => item.email === email);

  if(!user) return false;
  if(user.password !== password) return false;

  return true;
}
