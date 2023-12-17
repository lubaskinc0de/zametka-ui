import * as Yup from "yup";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { AuthButton } from "../../AuthButton";

import { Fields } from "../../../form/Fields.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userLogin } from "../../../../store/actions/user.js";
import { APIErrors } from "../../../general/APIErrors.jsx";

const fields = [
    {
        autocomplete: "email",
        name: "email",
        id: "email",
        label: "Почта",
        type: "email",
    },
    {
        autocomplete: "new-password",
        name: "password",
        id: "password",
        label: "Пароль",
        type: "password",
    },
];

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Неправильный e-mail")
        .max(60, "E-mail не должен быть длиннее 60 символов.")
        .required("Это поле обязательно."),

    password: Yup.string("Пароль не должен состоять из цифр")
        .min(8, "Длина пароля должна быть больше 8 символов")
        .required("Это поле обязательно."),
});

export function Form() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema,
        onSubmit: (values) => {
            const userData = {
                email: values.email,
                password: values.password,
            };

            dispatch(userLogin(userData));
        },
    });

    return (
        <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={formik.handleSubmit}
        >
            <APIErrors
                sx={{
                    mb: 3,
                }}
            ></APIErrors>
            <Grid container spacing={2}>
                <Fields formik={formik} fields={fields}></Fields>
            </Grid>
            <AuthButton title="Войти"></AuthButton>
        </Box>
    );
}
