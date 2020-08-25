const initialState = {
    loginData: {
        username: undefined
    }
}

const LoginData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_DATA': {
            return {
                loginData: {
                    username: action.payload.value
                }
            }
        }
        default:
            return state;
    }
}

export default LoginData;