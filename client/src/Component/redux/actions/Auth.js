// this file help to get data from mongoodb
import { AUTH, FETCH_SINGLEUSER, UPDATE_SINGLE_USER, IS_LOADING, IS_NOT_LOADING } from "../constants/actionTypes";
import * as api from '../api'
import { NotifyError, NotifySuccess, NotifyWarning } from "./notify";

// dispatching is this whole action
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: IS_LOADING });
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        NotifySuccess(data.message);
        dispatch({ type: IS_NOT_LOADING });
        navigate('/home');
    } catch (error) {
        if (error.response.status === 355) {
            dispatch({ type: IS_LOADING });
            NotifyWarning(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        }
        else if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: IS_LOADING });
            NotifyError(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        } else {
            dispatch({ type: IS_LOADING });
            NotifyError(error.message);
            dispatch({ type: IS_NOT_LOADING });
        }
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: IS_LOADING });
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        NotifySuccess(data.message);
        dispatch({ type: IS_NOT_LOADING });
        navigate('/home');
    } catch (error) {
        if (error.response.status === 355) {
            dispatch({ type: IS_LOADING });
            NotifyWarning(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        }
        else if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: IS_LOADING });
            NotifyError(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        } else {
            dispatch({ type: IS_LOADING });
            NotifyError(error.message);
            dispatch({ type: IS_NOT_LOADING });
        }
    }
}

export const singleUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: IS_LOADING });
        const { data: { singleUser } } = await api.singleUser(id);
        dispatch({ type: FETCH_SINGLEUSER, payload: { singleUser: singleUser } })
        dispatch({ type: IS_NOT_LOADING });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: IS_LOADING });
            NotifyError(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        } else {
            dispatch({ type: IS_LOADING });
            NotifyError(error.message);
            dispatch({ type: IS_NOT_LOADING });
        }
    }
}

export const updateSingleUser = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateSingleUser(id, formData);
        dispatch({ type: UPDATE_SINGLE_USER, payload: { updateSingleUser: data } })
        console.log(data, 'result');
        NotifySuccess(data.message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const deleteUser = (id) => async (dispatch, navigate) => {
    try {
        const { data: { message } } = await api.deleteUser(id);
        NotifySuccess(message);
        navigate('/');
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const addCart = (cart, formData) => async (dispatch) => {
    try {
        dispatch({ type: IS_LOADING });
        const { data: { message } } = await api.addCart([...cart, { ...formData, quantity: 1 }]);
        NotifySuccess(message);
        dispatch({ type: IS_NOT_LOADING });
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            dispatch({ type: IS_LOADING });
            NotifyError(error.response.data.message);
            dispatch({ type: IS_NOT_LOADING });
        } else {
            dispatch({ type: IS_LOADING });
            NotifyError(error.message);
            dispatch({ type: IS_NOT_LOADING });
        }
    }
}
export const deleteaCart = ({ id, cart }) => async () => {
    try {
        const { data: { message } } = await api.deleteaCart(id, cart);
        console.log(message);
        NotifyWarning(message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}

export const incrementaCart = ({ id, cart, increment }) => async () => {
    try {
        const data = { cart, increment };
        const { data: { message } } = await api.incrementaCart(id, data);
        NotifySuccess(message);
    } catch (error) {
        if (error.response.status >= 400 && error.response.status <= 500) {
            NotifyError(error.response.data.message);
        } else {
            NotifyError(error.message);
        }
    }
}
