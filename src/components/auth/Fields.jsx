import { Input } from "./Input.jsx";

export function Fields({ fields, formik }) {
    return fields.map((field) => (
        <Input
            key={field.id}
            name={field.name}
            autofocus={field.autofocus}
            autocomplete={field.autocomplete}
            id={field.id}
            label={field.label}
            sm={field.sm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.id]}
            error={!!(formik.touched[field.id] && formik.errors[field.id])}
            helperText={
                formik.touched[field.id] && formik.errors[field.id]
                    ? formik.errors[field.id]
                    : ""
            }
            type={field.type}
        ></Input>
    ));
}
