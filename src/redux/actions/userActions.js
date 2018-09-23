import * as types from '../constants/userConstants';

export const setUser = user => ({
  type: types.SET_USER,
  payload: user,
});

export const signInUserRequest = () => ({
  type: types.SIGNIN_USER_REQUEST,
});

export const signInUserSuccess = user => ({
  type: types.SIGNIN_USER_SUCCESS,
  payload: user,
});

export const signInUserError = () => ({
  type: types.SIGNIN_USER_ERROR,
});
