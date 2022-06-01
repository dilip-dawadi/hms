import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      console.log(action.data.result.role);
      localStorage.setItem('profile', action?.data.result.role);
      localStorage.setItem('token', action?.data.token);
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.removeItem('profile')
      localStorage.removeItem('token')
      return { ...state, authData: null };

    case actionType.FETCH_SINGLEUSER:
      return { ...state, AsingleUser: action.payload.singleUser };

    case actionType.UPDATE_SINGLE_USER:
      return { ...state, AsingleUser: action.payload.updateSingleUser };

    default:
      return state;
  }
};

export default authReducer;