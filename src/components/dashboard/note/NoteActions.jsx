import IconButton from "@mui/material/IconButton";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import {
    switchDialogOpen,
    switchEditDialogOpen,
} from "../../../store/slices/note.js";
import {CircularProgress, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";

export function NoteActions() {
    const dispatch = useDispatch();

    const { selectedNote, pendingCreate } = useSelector((state) => state.notes);

    return (
        <Stack direction="row" spacing={1}>
            <Tooltip title="Создать заметку">
                {!pendingCreate ?
                <IconButton
                    aria-label="Создать заметку"
                    onClick={() => {
                        dispatch(switchDialogOpen());
                    }}
                >
                    <NoteAddIcon></NoteAddIcon>
                </IconButton>
                    : <Box pl={1} pt={0.5}>
                        <CircularProgress size={18}></CircularProgress>
                    </Box>
                }
            </Tooltip>

            {selectedNote.title ? (
                <Tooltip title="Переименовать заметку">
                    <IconButton
                        aria-label="Переименовать заметку"
                        onClick={() => {
                            dispatch(switchEditDialogOpen());
                        }}
                    >
                        <EditIcon></EditIcon>
                    </IconButton>
                </Tooltip>
            ) : null}
        </Stack>
    );
}
