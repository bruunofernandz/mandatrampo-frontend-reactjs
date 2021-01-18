export const TOKEN_KEY = "@Token_Mandatrampo";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("login");
  localStorage.removeItem("email");
  localStorage.removeItem("nomecompleto");
  localStorage.removeItem("id");
};
