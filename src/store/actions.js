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
function storeTweet(tweet) {
  return {
    type: "STORE_TWEET",
    payload: { tweet },
  };
}
export { logIn, updateTweets, storeTweet };
