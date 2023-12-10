import IconButton from "@mui/material/IconButton";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useDispatch } from "react-redux";
import { switchDialogOpen } from "../../../store/slices/note.js";
import { Tooltip } from "@mui/material";

export function AddNoteButton() {
    const dispatch = useDispatch();

    return (
        <Tooltip title="Создать заметку">
            <IconButton
                aria-label="Создать заметку"
                onClick={() => {
                    dispatch(switchDialogOpen());
                }}
            >
                <NoteAddIcon></NoteAddIcon>
            </IconButton>
        </Tooltip>
    );
}
