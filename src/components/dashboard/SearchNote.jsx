import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function SearchNote() {
    return (
        <Box component="form" noValidate autoComplete="off" pr={3}>
            <TextField
                size="small"
                fullWidth
                id="note-search-query"
                label="Поиск по заметкам"
                variant="outlined"
            />
        </Box>
    );
}
