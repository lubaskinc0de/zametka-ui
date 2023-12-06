import React from "react";

import Typography from "@mui/material/Typography";

export function Title({ title }) {
    return (
        <Typography component="h1" variant="h5">
            {title}
        </Typography>
    );
}
