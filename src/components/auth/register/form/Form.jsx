import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { Fields } from "../../../form/Fields.jsx";
import { AuthButton } from "../../AuthButton.jsx";
import { APIErrors } from "../../../general/APIErrors";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userRegister } from "../../../../store/actions/user.js";

import * as Yup from "yup";

const fields = [
    {
        autocomplete: "given-name",
        name: "firstName",
        id: "firstName",
        label: "Имя",
        sm: 6,
        type: "text",
    },
    {
        autocomplete: "family-name",
        name: "lastName",
        id: "lastName",
        label: "Фамилия",
        sm: 6,
        type: "text",
    },
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
    {
        name: "password2",
        id: "password2",
        label: "Пароль еще раз",
        type: "password",
    },
];

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(40, "Имя не должно насчитывать больше 40 символов.")
        .required("Это поле обязательно"),

    lastName: Yup.string()
        .max(60, "Фамилия не должна насчитывать больше 60 символов.")
        .required("Это поле обязательно."),

    email: Yup.string()
        .email("Неправильный e-mail")
        .max(60, "E-mail не должен быть длиннее 60 символов.")
        .required("Это поле обязательно."),

    password: Yup.string("Пароль не должен состоять из цифр")
        .min(8, "Длина пароля должна быть больше 8 символов")
        .required("Это поле обязательно."),

    password2: Yup.string()
        .required("Это поле обязательно.")
        .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!"),
});

export function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
        },

        validationSchema,

        onSubmit: (values) => {
            const userData = {
                email: values.email,
                password: values.password,
                password2: values.password2,
                first_name: values.firstName,
                last_name: values.lastName,
                navigate,
            };

            dispatch(userRegister(userData));
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 3 }}
        >
            <APIErrors
                sx={{
                    mb: 3,
                }}
            ></APIErrors>
            <Grid container spacing={2}>
                <Fields formik={formik} fields={fields}></Fields>
            </Grid>
            <AuthButton title="Зарегистрироваться"></AuthButton>
        </Box>
    );
}
