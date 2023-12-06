import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAPIErrors, parseErrors } from "../slices/APIErrors";

import { NoteAPI } from "../api/note";

export const getNotes = createAsyncThunk(
    "notes/getNotes",
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            const { notes: notesState } = getState();

            const limit = notesState.limit;
            const offset = notesState.offset;

            const urlParameters = `limit=${limit}&offset=${offset}`;

            const response = await NoteAPI.getNotes(urlParameters);
            const notes = response.data.notes;

            return {
                notes,
                offset: offset + 100,
                hasNext: response.data.has_next,
            };
        } catch (err) {
            const APIErrors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors,
                })
            );

            return rejectWithValue();
        }
    }
);

export const deleteNote = createAsyncThunk(
    "notes/deleteNote",
    async (noteId, { rejectWithValue, dispatch }) => {
        try {
            await NoteAPI.deleteNote(noteId);

            return {
                noteId,
            };
        } catch (err) {
            const APIErrors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors,
                })
            );

            return rejectWithValue();
        }
    }
);

export const editNote = createAsyncThunk(
    "notes/editNote",
    async (data, { rejectWithValue, dispatch }) => {
        try {
            const response = await NoteAPI.editNote(data.noteId, data.note);
            const note = response.data.note;

            return {
                note: note,
            };
        } catch (err) {
            const APIErrors = parseErrors(err);

            dispatch(
                setAPIErrors({
                    APIErrors,
                })
            );

            return rejectWithValue();
        }
    }
);
