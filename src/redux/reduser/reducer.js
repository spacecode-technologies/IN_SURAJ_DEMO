import CONSTANTS from "../../common/constant"

const userLogin = { loading: false, userInfo: {}, err: null };

const Signin = (state = userLogin, action) => {
    switch (action.type) {
        case CONSTANTS.USER_LOGIN_REQUEST:
            return { loading: true };
        case CONSTANTS.USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload.data };
        case CONSTANTS.USER_LOGIN_FAIL:
            return { loading: false, err: action.payload };
        default:
            return state;
    }
};

export default Signin;
