import { createSlice } from "@reduxjs/toolkit";

import {
    userRegister,
    userLogin,
    userEmailVerification,
    getUserInfo,
} from "../actions/user.js";

import Cookies from "universal-cookie";

const initialState = {
    loading: null,
    verificationRejected: null,
    verificationSuccess: null,
    verificationErrors: [],
    userInfo: {
        firstName: null,
        lastName: null,
        joinedAt: null,
    },
    getUserInfoErrorCode: null,
    getUserInfoPending: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    extraReducers: {
        [userRegister.pending](state) {
            state.loading = true;
        },

        [userRegister.fulfilled](state) {
            state.loading = false;
        },

        [userRegister.rejected](state) {
            state.loading = false;
        },

        [userLogin.pending](state) {
            state.loading = true;
        },

        [userLogin.fulfilled](state, action) {
            state.loading = false;

            state.userInfo.firstName = action.payload.first_name;
            state.userInfo.lastName = action.payload.last_name;
            state.userInfo.joinedAt = action.payload.joined_at;

            state.getUserInfoErrorCode = initialState.getUserInfoErrorCode;
        },

        [userLogin.rejected](state) {
            state.loading = false;
        },

        [userEmailVerification.fulfilled](state) {
            state.verificationSuccess = true;
        },

        [userEmailVerification.rejected](state, action) {
            state.verificationRejected = true;
            state.verificationErrors = action.payload.errors;
        },

        [getUserInfo.pending](state) {
            state.getUserInfoPending = true;
        },

        [getUserInfo.fulfilled](state, action) {
            state.getUserInfoPending = false;

            const user_data = action.payload;

            state.userInfo.firstName = user_data.first_name;
            state.userInfo.lastName = user_data.last_name;
            state.userInfo.joinedAt = user_data.joined_at;
        },

        [getUserInfo.rejected](state, action) {
            state.getUserInfoPending = false;

            state.getUserInfoErrorCode = action.payload.errorCode;

            if (state.getUserInfoErrorCode === 401) {
                const cookie = new Cookies();

                cookie.remove("csrf_access_token");
            }
        },
    },
});

export default userSlice.reducer;
