function tweetsReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_TWEETS":
      return action.payload.tweets;
    case "STORE_TWEET":
      return [action.payload.tweet, ...state];
    default:
      return state;
  }
}
export default tweetsReducer;
