import CONSTANTS from "../../common/constant";
import  Signin from "./reducer";


test('when state is undefined, return false', () => {
    const newState=Signin({ loading: false, userInfo: {}, err: null },{type:CONSTANTS.USER_LOGIN_REQUEST});
    expect(newState.loading).toEqual(true)
});

// test('when state is undefined, return true', () => {
//     const newState=Signin({ loading: false, userInfo: {}, err: null },{type:CONSTANTS.USER_LOGIN_SUCCESS});
//     expect(newState).toEqual()
// });



