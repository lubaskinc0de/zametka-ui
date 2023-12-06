import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../../store/actions/note.js";

export function DeleteNote() {
    const { selectedNote } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    return (
        <IconButton
            color="error"
            onClick={() => {
                if (selectedNote) {
                    dispatch(deleteNote(selectedNote.note_id));
                }
            }}
            aria-label="delete"
        >
            <DeleteIcon />
        </IconButton>
    );
}
