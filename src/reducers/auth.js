const defaultState = {
  statusLogin: false,
  listUser: [
    {
      email: "admin@admin.com",
      password: "admin",
    },
  ],
};

const authReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  console.log("state:", state);
  console.log("action:", payload);
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        statusLogin: true,
      };
    case "registrasi":
      return {
        ...state,
        listUser: [...state.listUser, payload.newUser[0]],
      };
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};

export default authReducer;
