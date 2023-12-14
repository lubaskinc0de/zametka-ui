import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthAPI } from "../api/auth";

import { setAPIErrors, clearAPIErrors, parseErrors } from "../slices/APIErrors";

export const userRegister = createAsyncThunk(
    "user/register",

    async (userData, { dispatch, rejectWithValue }) => {
        try {
            const navigate = userData.navigate;

            delete userData.navigate;

            await AuthAPI.register(userData);

            dispatch(clearAPIErrors());

            navigate("/signin");
        } catch (err) {
            const errors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors: errors,
                })
            );

            return rejectWithValue({
                errors,
            });
        }
    }
);

export const userLogin = createAsyncThunk(
    "user/login",

    async (userData, { dispatch, rejectWithValue }) => {
        try {
            const response = await AuthAPI.login(userData);

            dispatch(clearAPIErrors());

            return response.data;
        } catch (err) {
            const errors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors: errors,
                })
            );

            return rejectWithValue({
                errors,
            });
        }
    }
);

export const userEmailVerification = createAsyncThunk(
    "user/emailVerification",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const { url_token } = data;
            await AuthAPI.emailVerification(url_token);
        } catch (err) {
            const errors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors: errors,
                })
            );

            return rejectWithValue({
                errors,
            });
        }
    }
);

export const getUserInfo = createAsyncThunk(
    "user/getUserInfo",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await AuthAPI.whoami();

            return response.data;
        } catch (err) {
            const errors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors: errors,
                })
            );

            return rejectWithValue({
                errors,
                errorCode: err.response ? err.response.status : err.code,
            });
        }
    }
);
