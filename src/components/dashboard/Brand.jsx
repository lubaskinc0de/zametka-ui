import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { APIErrors } from "../general/APIErrors.jsx";

export function Brand() {
    const APIErrorsList = useSelector((state) => state.APIErrors.APIErrors);

    return APIErrorsList && APIErrorsList.length ? (
        <APIErrors
            sx={{
                maxWidth: "300px",
                width: "100%",
            }}
        ></APIErrors>
    ) : (
        <Typography variant="h5">zametka</Typography>
    );
}
