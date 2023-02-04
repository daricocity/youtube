import config from '../../config';
import { axiosHandler, errorHandler } from '../../utils/utils';
import { loginStart, loginSuccess, loginFailure, logoutUser, registerStart, registerSuccess, registerFailure } from './AuthActions';

// AUTH
const login = async (loginData, dispatch, setError) => {
    dispatch(loginStart());
    try {
        const res = await axiosHandler({
            method: 'post',
            url: `${config.proxy}/auth/login`,
            data: loginData
        }).catch((e) => setError(errorHandler(e)));
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
};

const register = async (regData, dispatch, setError) => {
    dispatch(registerStart());
    try {
        const res = await axiosHandler({
            method: 'post',
            url: `${config.proxy}/auth/register`,
            data: regData
        }).catch((e) => setError(errorHandler(e)));
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
};

const logout = async (dispatch) => {
    localStorage.setItem('user', null);
    dispatch(logoutUser());
};

export { login, register, logout };
