export const getUsersDB = () => {
  return JSON.parse(localStorage.getItem('usersDB')) || [];
}

export const addNewUserToDB = (user) => {
  const users = getUsersDB();
  users.push(user);
  localStorage.setItem('usersDB', JSON.stringify(users));
}

export const setCurrentUser = (email) => {
  if(!email) {
    sessionStorage.setItem('currentUser', JSON.stringify({ email: '', authenticaded: false }));
    return;
  }
  
  sessionStorage.setItem('currentUser', JSON.stringify({ email, authenticaded: true }));
}

export const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem('currentUser'));
}