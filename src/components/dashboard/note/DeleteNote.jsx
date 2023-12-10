import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../../store/actions/note.js";
import { Tooltip } from "@mui/material";

export function DeleteNote() {
    const { selectedNote } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    return (
        <Tooltip title="Удалить выбранную заметку">
            <IconButton
                color="error"
                onClick={() => {
                    if (selectedNote) {
                        dispatch(deleteNote(selectedNote.note_id));
                    }
                }}
                aria-label="Удалить выбранную заметку"
            >
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    );
}
