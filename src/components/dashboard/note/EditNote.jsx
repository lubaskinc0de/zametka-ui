import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import MUIRichTextEditor from "mui-rte";
import { editNote } from "../../../store/actions/note.js";
import { useEffect, useState } from "react";

export function EditNote() {
    const { selectedNote } = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const [text, updateText] = useState(null);

    useEffect(() => {
        updateText(selectedNote.text);
    }, [selectedNote]);

    const save = (value) => {
        updateText(value);
        dispatch(
            editNote({
                noteId: selectedNote.note_id,
                note: {
                    title: selectedNote.title,
                    text: value,
                },
            })
        );
    };

    return (
        <Box
            height="92vh"
            overflow="auto"
            fontSize="1rem"
            px={10}
            pt={2}
            width="100%"
        >
            <MUIRichTextEditor
                controls={[
                    "undo",
                    "redo",
                    "title",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "link",
                    "media",
                    "numberList",
                    "bulletList",
                    "clear",
                    "save",
                ]}
                inlineToolbar={true}
                inheritFontSize={true}
                onSave={(value) => {
                    save(value);
                }}
                defaultValue={text}
                label="Печатайте.."
            />
        </Box>
    );
}
