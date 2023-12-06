import React from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

export function FormLink({ link, title }) {
    return (
        <Grid container justifyContent="flex-end">
            <Grid item>
                <MUILink component="div">
                    <Link
                        style={{ color: "inherit", fontSize: "0.95rem" }}
                        to={link}
                    >
                        {title}
                    </Link>
                </MUILink>
            </Grid>
        </Grid>
    );
}
