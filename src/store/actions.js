function logIn(user) {
  return {
    type: "LOGIN",
    payload: { user },
  };
}
function updateTweets(tweets) {
  return {
    type: "UPDATE_TWEETS",
    payload: { tweets },
  };
}
export { logIn, updateTweets };
