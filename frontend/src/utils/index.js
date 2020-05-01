export const isLogin = () => {
  const user = JSON.parse(localStorage.getItem('@user_gp'));
  return Boolean(user);
}