import * as Yup from "yup";
import { useFormik } from "formik";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../../../store/actions/note.js";
import Grid from "@mui/material/Grid";
import { Fields } from "../../form/Fields.jsx";

const fields = [
    {
        name: "noteTitle",
        id: "noteTitle",
        label: "Новое название заметки",
        type: "text",
        sx: {
            margin: "dense",
            mt: 2,
        },
    },
];

const validationSchema = Yup.object({
    noteTitle: Yup.string()
        .max(
            40,
            "Новое название заметки не должно насчитывать больше 50 символов."
        )
        .required("Это поле обязательно!"),
});

export function EditNoteDialogForm({ handleClose }) {
    const { pendingNoteId, selectedNote } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            noteTitle: selectedNote.title,
        },

        validationSchema,

        onSubmit: (values) => {
            const note = {
                title: values.noteTitle,
            };

            dispatch(editNote({
                noteId: selectedNote.note_id,
                note,
            }));
        },
    });

    return (
        <>
            <DialogContent>
                <DialogContentText>
                    Тут вы можете изменить название вашей заметки
                </DialogContentText>
                <Grid container spacing={2}>
                    <Fields formik={formik} fields={fields}></Fields>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>
                    Отменить
                </Button>
                <LoadingButton
                    type="submit"
                    onClick={(e) => {
                        formik.handleSubmit(e);
                        handleClose();
                    }}
                    loading={pendingNoteId === selectedNote.note_id}
                    variant="text"
                >
                    Изменить
                </LoadingButton>
            </DialogActions>
        </>
    );
}
