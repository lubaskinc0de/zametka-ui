import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";

import { useSelector } from "react-redux";

export function AuthButton({ title }) {
    const loading = useSelector((state) => state.user.loading);

    return (
        <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            loading={loading}
            sx={{ mt: 3, mb: 2 }}
        >
            {title}
        </LoadingButton>
    );
}
