import React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export function Copyright({ sx }) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={sx}
        >
            {"Все права защищены © "}
            <Link
                color="inherit"
                href="https://github.com/lubaskinc0de/zametka-api"
            >
                zametka
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
