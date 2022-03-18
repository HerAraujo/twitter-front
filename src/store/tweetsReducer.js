function tweetsReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_TWEETS":
      return action.payload.tweets;

    default:
      return state;
  }
}
export default tweetsReducer;
