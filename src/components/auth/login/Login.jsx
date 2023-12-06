import { Icon } from "../Icon.jsx";
import { Title } from "../Title.jsx";
import { Copyright } from "../Copyright.jsx";
import { Form } from "./form/Form.jsx";
import { FormLink } from "../FormLink.jsx";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export function Login() {
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
                <Title title="Войти"></Title>
                <Form></Form>
                <FormLink
                    title="Нет аккаунта? Зарегистрироваться"
                    link={"/signup"}
                ></FormLink>
            </Box>
            <Copyright sx={{ mt: 5, mb: 4 }} />
        </Container>
    );
}
