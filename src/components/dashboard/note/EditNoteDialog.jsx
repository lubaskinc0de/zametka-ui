import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { switchEditDialogOpen } from "../../../store/slices/note.js";
import {EditNoteDialogForm} from "./EditNoteDialogForm.jsx";

export function EditNoteDialog() {
    const { isEditDialogOpen } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(switchEditDialogOpen());
    };

    return (
        <form noValidate>
            <Dialog open={isEditDialogOpen} onClose={handleClose}>
                <DialogTitle>Переименовать заметку</DialogTitle>
                <EditNoteDialogForm handleClose={handleClose}></EditNoteDialogForm>
            </Dialog>
        </form>
    );
}
