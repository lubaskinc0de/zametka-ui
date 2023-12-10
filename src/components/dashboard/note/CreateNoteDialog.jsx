import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { switchDialogOpen } from "../../../store/slices/note.js";
import { CreateNoteDialogForm } from "./CreateNoteDialogForm.jsx";

export function CreateNoteDialog() {
    const { isDialogOpen } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(switchDialogOpen());
    };

    return (
        <form noValidate>
            <Dialog open={isDialogOpen} onClose={handleClose}>
                <DialogTitle>Создать заметку</DialogTitle>
                <CreateNoteDialogForm
                    handleClose={handleClose}
                ></CreateNoteDialogForm>
            </Dialog>
        </form>
    );
}
