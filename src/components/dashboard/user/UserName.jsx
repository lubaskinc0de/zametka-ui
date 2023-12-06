import Typography from "@mui/material/Typography";

export function UserName({ value }) {
    return (
        <Typography variant="h6" fontWeight="bold">
            {value}
        </Typography>
    );
}
