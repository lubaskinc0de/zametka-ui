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
import TextField from "@mui/material/TextField";

const field = {
    name: "noteTitle",
    id: "noteTitle",
    label: "Название заметки",
    type: "text",
    sx: {
        margin: "dense",
    },
};

const validationSchema = Yup.object({
    noteTitle: Yup.string()
        .max(40, "Название заметки не должно насчитывать больше 50 символов.")
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
                <TextField
                    name={field.name}
                    required
                    fullWidth
                    id={field.id}
                    label={field.label}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.noteTitle}
                    error={
                        !!(formik.touched[field.id] && formik.errors[field.id])
                    }
                    helperText={
                        formik.touched[field.id] && formik.errors[field.id]
                            ? formik.errors[field.id]
                            : ""
                    }
                    variant="standard"
                    type={field.type}
                    sx={field.sx}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>
                    Отменить
                </Button>
                <LoadingButton
                    type="submit"
                    onClick={formik.handleSubmit}
                    loading={pendingCreate}
                    variant="text"
                >
                    Создать
                </LoadingButton>
            </DialogActions>
        </>
    );
}
