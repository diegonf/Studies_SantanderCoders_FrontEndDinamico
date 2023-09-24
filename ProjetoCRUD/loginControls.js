import { handleLoginFormSubmit } from "./loginForm.js";
import { handleRegisterFormSubmit } from "./loginRegisterForm.js";

const wd = window;

export const loadLoginControls = () => {
  // tabs
  setLoginTab(); // setting initial value
  wd.loginTab.addEventListener('click', setLoginTab);
  wd.registerTab.addEventListener('click', setRegisterTab);

  // password visibility
  setHideRegisterPassword(); // setting initial value
  wd.registerOpenEye.addEventListener('click', setHideRegisterPassword);
  wd.regiserClosedEye.addEventListener('click', setShowRegisterPassword);

  // submit buttons
  wd.registerForm.addEventListener('submit', handleRegisterFormSubmit);
  wd.loginForm.addEventListener('submit', handleLoginFormSubmit);
}

const setLoginTab = () => {
  wd.loginTab.classList.add('bg-white');
  wd.loginForm.classList.remove('hidden');
  wd.registerTab.classList.remove('bg-white');
  wd.registerForm.classList.add('hidden');
}

const setRegisterTab = () => {
  wd.loginTab.classList.remove('bg-white');
  wd.loginForm.classList.add('hidden');
  wd.registerTab.classList.add('bg-white');
  wd.registerForm.classList.remove('hidden');
}

const setShowRegisterPassword = () => {
  wd.registerPass.type = 'text';
  wd.registerPass.placeholder = 'senha';
  wd.registerOpenEye.classList.remove('hidden');
  wd.regiserClosedEye.classList.add('hidden');
}

const setHideRegisterPassword = () => {
  wd.registerPass.type = 'password';
  wd.registerPass.placeholder = '********';
  wd.registerOpenEye.classList.add('hidden');
  wd.regiserClosedEye.classList.remove('hidden');
}
