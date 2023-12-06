import Typography from "@mui/material/Typography";

export function UserJoinedDate({ value }) {
    return (
        <Typography variant="caption" fontStyle="italic" fontWeight="lighter">
            {value}
        </Typography>
    );
}
