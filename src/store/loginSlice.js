import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: ["Admin", "User1", "User2", "Manager"],
    loginDet: ""
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.loginDet = action.payload;
        }
    }
});

export const {userLogin} = loginSlice.actions;
export default loginSlice.reducer;