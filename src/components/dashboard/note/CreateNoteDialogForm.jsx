import * as Yup from "yup";
import { useFormik } from "formik";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../../../store/actions/note.js";
import Grid from "@mui/material/Grid";
import { Fields } from "../../form/Fields.jsx";

const fields = [
    {
        name: "noteTitle",
        id: "noteTitle",
        label: "Название заметки",
        type: "text",
        sx: {
            margin: "dense",
            mt: 2,
        },
    },
];

const validationSchema = Yup.object({
    noteTitle: Yup.string()
        .max(50, "Название заметки не должно насчитывать больше 50 символов.")
        .required("Это поле обязательно!"),
});

export function CreateNoteDialogForm({ handleClose }) {
    const { pendingCreate } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            noteTitle: "",
        },

        validationSchema,

        onSubmit: (values) => {
            const note = {
                title: values.noteTitle,
            };

            dispatch(createNote(note));
        },
    });

    return (
        <>
            <DialogContent>
                <DialogContentText>
                    Придумайте название для вашей заметки, возможно, это начало
                    новой истории.
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
                    loading={pendingCreate}
                    variant="text"
                >
                    Создать
                </LoadingButton>
            </DialogActions>
        </>
    );
}
