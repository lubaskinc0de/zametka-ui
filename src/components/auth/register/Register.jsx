import { Icon } from "../Icon.jsx";
import { Title } from "../Title.jsx";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Form } from "./form/Form.jsx";
import { Copyright } from "../Copyright.jsx";

import { FormLink } from "../FormLink.jsx";

export function Register() {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Icon></Icon>
                <Title title="Регистрация"></Title>
                <Form></Form>
                <FormLink
                    link={"/signin"}
                    title={"Уже есть аккаунт? Войти"}
                ></FormLink>
            </Box>
            <Copyright sx={{ mt: 3 }} />
        </Container>
    );
}
