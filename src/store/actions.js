function logIn(user) {
  return {
    type: "LOGIN",
    payload: { user },
  };
}
export { logIn };
