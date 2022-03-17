function userReducer(state = { user: null }, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return {
        ...state,
        user: {
          id: action.payload.user.id,
          accessToken: action.payload.user.accessToken,
          username: action.payload.user.username,
        },
      };

    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
}
export default userReducer;
