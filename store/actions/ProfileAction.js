export const createProfile = (value) => ({
  type: 'CREATE_PROFILE',
  payload: value,
});
 
export const loginUser = (value) => ({
  type: 'LOGIN',
  payload: value,
});