import Grid from "@mui/material/Unstable_Grid2";

import { FunctionalPanel } from "./FunctionalPanel.jsx";
import { EditorWindow } from "./EditorWindow.jsx";

const border = {
    borderColor: "divider.main",
    borderWidth: "1px",
    borderStyle: "solid",
};

const sectionBorder = {
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
};

export function Dashboard() {
    return (
        <Grid
            sx={{
                height: "100vh",
                display: "flex",
                margin: 0,
                mt: 0,
                padding: 0,
                pt: 0,
            }}
            container
            spacing={0}
        >
            <FunctionalPanel
                border={border}
                sectionBorder={sectionBorder}
            ></FunctionalPanel>
            <EditorWindow
                border={border}
                sectionBorder={sectionBorder}
            ></EditorWindow>
        </Grid>
    );
}
