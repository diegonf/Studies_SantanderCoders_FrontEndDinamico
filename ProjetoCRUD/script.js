import { loadLoginControls } from "./loginControls.js";
import { loadUserLoggedinMenu } from "./userMenu.js";
import { getCurrentUser } from "./services.js";

const wd = window;

export const updatePageDOM = () => {
  wd.loginPage.classList.add('hidden');
  wd.homePage.classList.add('hidden');
  
  const currentUser = getCurrentUser();
  if(currentUser && currentUser.authenticaded === true && currentUser.email !== '') {
    wd.homePage.classList.remove('hidden');
    wd.loginPage.classList.add('hidden');
    loadUserLoggedinMenu();

  } else {
    wd.homePage.classList.add('hidden');
    wd.loginPage.classList.remove('hidden');
    loadLoginControls();
  }
}

updatePageDOM();