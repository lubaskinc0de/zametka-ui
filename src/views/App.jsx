import React, { useMemo } from "react";

import { Router } from "../router.jsx";

import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";
import { ColorMode } from "../store/slices/globalSettings.js";

export function App() {
    const { theme: colorMode } = useSelector((state) => state.globalSettings);

    const commonScrollbar = {
        "&::-webkit-scrollbar": {
            width: "14px",
            background: "transparent",
        },
        "&::-webkit-scrollbar-corner": {
            background: "transparent",
        },
    };

    const lightScrollbar = {
        ...commonScrollbar,
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "100px",
            minHeight: "24px",
            border: "4px solid #fff",
            background: "#dcdcde",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "#646970",
        },
    };

    const darkScrollbar = {
        ...commonScrollbar,
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "100px",
            minHeight: "24px",
            border: "4px solid #1d2327",
            background: "#2c3338",
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "#8c8f94",
        },
        "&::-webkit-scrollbar-thumb:active": {
            background: "#646970",
        },
    };

    const lightTheme = {
        mode: colorMode,
        primary: {
            main: "#3B429F",
            light: "#ced9f2",
        },
        secondary: {
            main: "#8B5FBF",
        },
        divider: {
            main: "rgba(0, 0, 0, 0.12)",
        },
        hover: {
            main: "#f6f7f7",
        },
    };

    const darkTheme = {
        ...lightTheme,
        background: {
            default: "#1d2327",
        },
        divider: {
            main: "rgba(255, 255, 255, 0.12)",
        },
        hover: {
            main: "#2c3338",
        },
    };

    let theme = useMemo(
        () =>
            createTheme({
                palette: colorMode === ColorMode.DARK ? darkTheme : lightTheme,
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            ...(colorMode === ColorMode.DARK
                                ? darkScrollbar
                                : lightScrollbar),
                        },
                    },
                },
            }),
        [colorMode]
    );

    theme = responsiveFontSizes(theme, {
        factor: 4,
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Router></Router>
            </CssBaseline>
        </ThemeProvider>
    );
}
