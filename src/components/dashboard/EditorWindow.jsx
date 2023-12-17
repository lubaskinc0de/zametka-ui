import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { NoteActions } from "./note/NoteActions.jsx";
import { CreateNoteDialog } from "./note/CreateNoteDialog.jsx";
import { EditNoteDialog } from "./note/EditNoteDialog.jsx";
import { Brand } from "./Brand.jsx";
import { isEmpty } from "../../lib/lib.js";
import { DeleteNote } from "./note/DeleteNote.jsx";
import { EditNote } from "./note/EditNote.jsx";
import { useSelector } from "react-redux";

export function EditorWindow({ border, sectionBorder }) {
    const { selectedNote, isDialogOpen, isEditDialogOpen } = useSelector(
        (state) => state.notes
    );

    return (
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
                        <NoteActions></NoteActions>
                        {isDialogOpen ? (
                            <CreateNoteDialog></CreateNoteDialog>
                        ) : isEditDialogOpen ? (
                            <EditNoteDialog></EditNoteDialog>
                        ) : (
                            <Brand></Brand>
                        )}
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
                        {!isEmpty(selectedNote) ? <EditNote></EditNote> : null}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
