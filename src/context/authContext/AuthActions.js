const loginStart = () => ({
    type: 'LOGIN_START'
});

const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
});

const loginFailure = () => ({
    type: 'LOGIN_FAILURE'
});

const logoutUser = () => ({
    type: 'LOGOUT'
});

const registerStart = () => ({
    type: 'REGISTER_START'
});

const registerSuccess = (regData) => ({
    type: 'REGISTER_SUCCESS',
    payload: regData
});

const registerFailure = () => ({
    type: 'REGISTER_FAILURE'
});

export { loginStart, loginSuccess, loginFailure, logoutUser, registerStart, registerSuccess, registerFailure };
