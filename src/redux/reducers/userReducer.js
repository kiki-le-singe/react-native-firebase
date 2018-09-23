import * as types from '../constants/userConstants';

const INITIAL_STATE = {
  userInfo: {},
  connected: false,
  loading: false,
  success: false,
  error: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.SET_USER:
      return {
        ...this.state,
      };
    case types.SIGNIN_USER_REQUEST:
      return {
        ...this.state,
        loading: true,
        success: false,
        error: false,
      };
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...this.state,
        userInfo: payload._user,
        connected: true,
        loading: false,
        success: true,
        error: false,
      };
    case types.SIGNIN_USER_ERROR:
      return {
        ...this.state,
        connected: false,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
