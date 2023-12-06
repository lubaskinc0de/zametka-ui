import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userEmailVerification } from "../../../store/actions/user.js";

import Container from "@mui/material/Container";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import DownloadingIcon from "@mui/icons-material/Downloading";

export function EmailVerification({ url_token }) {
    const dispatch = useDispatch();
    const { verificationSuccess, verificationRejected, verificationErrors } =
        useSelector((state) => state.user);

    useEffect(() => {
        if (url_token) {
            dispatch(userEmailVerification({ url_token }));
        }
    }, []);

    const getIcon = () => {
        if (verificationSuccess) {
            return (
                <CheckCircleIcon
                    fontSize="large"
                    color="success"
                ></CheckCircleIcon>
            );
        } else if (verificationRejected) {
            return <ErrorIcon fontSize="large" color="error"></ErrorIcon>;
        }

        return (
            <DownloadingIcon fontSize="large" color="primary"></DownloadingIcon>
        );
    };

    const getText = () => {
        const successText = (
            <NavLink to="/login/">
                Вы успешно активировали свой аккаунт! Теперь вы можете войти
            </NavLink>
        );
        const loadingText = "Идет активация..";

        if (verificationSuccess) {
            return successText;
        } else if (verificationRejected) {
            return verificationErrors ? verificationErrors[0] : "Ошибка!";
        }

        return loadingText;
    };

    return (
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            maxWidth="ld"
        >
            <Grid
                justifyContent="center"
                alignItems="center"
                container
                spacing={0}
                direction="column"
            >
                <Grid item xs={6}>
                    {getIcon()}
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h7">{getText()}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
