import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { CircularProgress } from "@mui/material";

import React from "react";

export function LoadingContainer({ errorText, isLoading }) {
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
                    {isLoading ? (
                        <CircularProgress />
                    ) : errorText ? (
                        <ErrorIcon fontSize="large" color="error"></ErrorIcon>
                    ) : null}
                </Grid>
                {errorText ? (
                    <Grid item xs={6}>
                        <Typography variant="h7">{errorText}</Typography>
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </Container>
    );
}
