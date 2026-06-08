const initialState = {
  username: '',
  email: '',
  password: '',
  isLogin: false,
};
 
export const profileReducer = (state = initialState, action) => {
  if (action.type === 'CREATE_PROFILE') {
    const { username, email, password } = action.payload;
    return { ...state, username, email, password };
  }
  if (action.type === 'LOGIN') {
    return { ...state, isLogin: action.payload };
  }
  return state;
};