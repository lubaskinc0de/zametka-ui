import * as React from "react";

import Box from "@mui/material/Box";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setSearch } from "../../store/slices/note.js";
import Grid from "@mui/material/Grid";
import { Fields } from "../form/Fields.jsx";
import { useCallback, useEffect } from "react";

import * as _ from "lodash";

const fields = [
    {
        name: "noteTitle",
        id: "noteTitle",
        label: "Поиск по названию",
        type: "text",
        sx: {
            margin: "dense",
        },
        size: "small",
    },
];

const validationSchema = Yup.object({
    noteTitle: Yup.string().max(
        50,
        "Название заметки не должно насчитывать больше 50 символов."
    ),
});

export function SearchNote(callback, deps) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            noteTitle: "",
        },
        validationSchema,
    });

    const updateSearchQuery = useCallback(
        _.debounce(() => {
            dispatch(setSearch(formik.values.noteTitle));
        }, 2000),
        [formik.values.noteTitle]
    );

    useEffect(() => {
        updateSearchQuery();

        return updateSearchQuery.cancel;
    }, [updateSearchQuery]);

    return (
        <Box component="form" noValidate autoComplete="off" pr={3}>
            <Grid container spacing={2}>
                <Fields formik={formik} fields={fields}></Fields>
            </Grid>
        </Box>
    );
}
