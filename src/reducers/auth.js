const defaultState = {
  statusLogin: false,
  listUser: [
    {
      email: "ekocahyanto007@gmail.com",
      password: "1234",
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
        ...state, //agar tidak menghapus data lama
        statusLogin: true,
      };
    case "registrasi":
      return {
        ...state,
        listUser: [...state.listUser, payload.newUser],
      };
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};

export default authReducer;
