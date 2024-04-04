import { userLogin } from "./loginSlice";

const validateUser = (loginDet) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(userLogin(loginDet));
        }, 2000);
    }
}

export default validateUser;