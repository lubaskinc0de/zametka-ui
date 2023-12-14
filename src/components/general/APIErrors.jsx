import React from "react";

import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { useSelector, useDispatch } from "react-redux";

import { shiftAPIErrors } from "../../store/slices/APIErrors";

export function APIErrors({ sx }) {
    const dispatch = useDispatch();
    const APIErrorsList = useSelector((state) => state.APIErrors.APIErrors);

    const handleClose = () => {
        dispatch(shiftAPIErrors());
    };

    return APIErrorsList && APIErrorsList.length ? (
        <Box sx={sx}>
            <Grid item xs={12}>
                <Alert onClose={handleClose} severity="error">
                    {APIErrorsList[0]}
                </Alert>
            </Grid>
        </Box>
    ) : null;
}
