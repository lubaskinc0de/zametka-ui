import Grid from "@mui/material/Unstable_Grid2";

import Box from "@mui/material/Box";

import { UserInfo } from "./user/UserInfo.jsx";
import { SearchNote } from "./SearchNote.jsx";
import { Stack } from "@mui/material";
import { NoteList } from "./note/NoteList.jsx";
import { DeleteNote } from "./note/DeleteNote.jsx";
import { EditNote } from "./note/EditNote.jsx";
import { useSelector } from "react-redux";
import { isEmpty } from "../../lib/lib.js";
import { Brand } from "./Brand.jsx";
import { AddNoteButton } from "./note/AddNoteButton.jsx";
import { CreateNoteDialog } from "./note/CreateNoteDialog.jsx";

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
    const { selectedNote } = useSelector((state) => state.notes);

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
            <Grid xs={12} sm={3}>
                <Box
                    height="100%"
                    sx={{
                        ...border,
                        borderLeft: 0,
                        borderTop: 0,
                        borderBottom: 0,
                    }}
                >
                    <Grid direction="row" container spacing={0} height="100%">
                        <Grid
                            height="20%"
                            sx={{
                                ...border,
                                ...sectionBorder,
                            }}
                            xs={12}
                            pl={2}
                            pt={2}
                        >
                            <Stack spacing={2}>
                                <UserInfo></UserInfo>
                                <SearchNote></SearchNote>
                            </Stack>
                        </Grid>
                        <Grid
                            height="80vh"
                            sx={{
                                ...border,
                                ...sectionBorder,
                                borderBottom: 0,
                            }}
                            xs={12}
                        >
                            <NoteList></NoteList>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={0} sm={9}>
                <Box
                    height="100%"
                    sx={{
                        ...border,
                        borderLeft: 0,
                        borderTop: 0,
                        borderBottom: 0,
                    }}
                >
                    <Grid direction="row" container spacing={0} height="100%">
                        <Grid
                            height="8%"
                            sx={{
                                ...border,
                                ...sectionBorder,
                            }}
                            pr={2}
                            pl={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            xs={12}
                        >
                            <AddNoteButton></AddNoteButton>
                            <CreateNoteDialog></CreateNoteDialog>
                            <Brand></Brand>
                            {!isEmpty(selectedNote) ? (
                                <DeleteNote></DeleteNote>
                            ) : null}
                        </Grid>
                        <Grid
                            height="92%"
                            sx={{
                                ...border,
                                ...sectionBorder,
                                borderBottom: 0,
                            }}
                            xs={12}
                        >
                            {!isEmpty(selectedNote) ? (
                                <EditNote></EditNote>
                            ) : null}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}
