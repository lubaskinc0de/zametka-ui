import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { unselectNote } from "../../../store/slices/note.js";
import { ColorMode } from "../../../store/slices/globalSettings.js";
import { CircularProgress, Stack } from "@mui/material";
import { getNote } from "../../../store/actions/note.js";

export function Note({ style, note }) {
    const dispatch = useDispatch();
    const { selectedNote, pendingNoteId } = useSelector((state) => state.notes);
    const { theme } = useSelector((state) => state.globalSettings);

    return (
        <Box
            pl={3}
            pr={2}
            sx={{
                ...style,
                "&:hover": {
                    backgroundColor:
                        selectedNote.note_id !== note.note_id
                            ? "hover.main"
                            : undefined,
                },
                backgroundColor:
                    selectedNote.note_id === note.note_id
                        ? theme === ColorMode.DARK
                            ? "primary.dark"
                            : "primary.light"
                        : undefined,
            }}
            onClick={() => {
                if (selectedNote.note_id !== note.note_id) {
                    dispatch(getNote(note.note_id));
                } else {
                    dispatch(unselectNote({}));
                }
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    borderBottomWidth:
                        selectedNote.note_id === note.note_id ? 0 : "1px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "divider.main",
                    height: "100%",
                    width: "100%",
                }}
            >
                <Stack
                    width="100%"
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography fontWeight={500} variant="body1">
                        {note.title}
                    </Typography>
                    {note.note_id === pendingNoteId ? (
                        <CircularProgress size={15} />
                    ) : null}
                </Stack>
            </Box>
        </Box>
    );
}
