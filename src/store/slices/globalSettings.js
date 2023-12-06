import { createSlice } from "@reduxjs/toolkit";

export const ColorMode = {
    UNSET: window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light",
    DARK: "dark",
    LIGHT: "light",
};

const globalSettingsSlice = createSlice({
    name: "globalSettingsSlice",
    initialState: {
        theme: ColorMode.UNSET,
    },
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = globalSettingsSlice.actions;

export default globalSettingsSlice.reducer;
