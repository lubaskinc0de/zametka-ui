import { createSlice } from "@reduxjs/toolkit";

import {
    deleteNote,
    editNote,
    getNotes,
    createNote,
    getNote,
} from "../actions/note.js";

const initialState = {
    notes: [],
    pending: null,
    rejected: null,
    search: null,
    limit: 100,
    offset: 0,
    hasNext: null,
    selectedNote: {},
    pendingNoteId: null,
    isDialogOpen: false,
    pendingCreate: null,
};

const noteSlice = createSlice({
    name: "noteSlice",
    initialState,
    reducers: {
        setSearch(state, action) {
            const { search } = action.payload;

            if (search !== state.search) {
                // refresh

                state.notes = [];
                state.nextPage = initialState.nextPage;
            }

            state.search = search;
        },

        unselectNote(state) {
            state.selectedNote = null;
        },

        switchDialogOpen(state) {
            state.isDialogOpen = !state.isDialogOpen;
        },
    },

    extraReducers: {
        [getNotes.pending](state) {
            state.pending = true;
            state.rejected = false;
        },

        [getNotes.fulfilled](state, action) {
            const { notes, hasNext, offset } = action.payload;

            if (notes.length) {
                state.notes = state.notes.concat(notes);
            }

            state.hasNext = hasNext;
            state.offset = offset;

            state.pending = false;
        },

        [getNotes.rejected](state) {
            state.pending = false;
            state.rejected = true;
        },

        [getNote.pending](state, action) {
            state.pendingNoteId = action.meta.arg.noteId;
        },

        [getNote.fulfilled](state, action) {
            state.selectedNote = action.payload.note;
            state.pendingNoteId = null;
        },

        [getNote.rejected](state) {
            state.pendingNoteId = null;
        },

        [deleteNote.fulfilled](state, action) {
            const { noteId } = action.payload;

            state.notes = state.notes.filter((item) => item.note_id !== noteId);
            state.selectedNote = {};
        },

        [editNote.pending](state, action) {
            state.pendingNoteId = action.meta.arg.noteId;
        },

        [editNote.fulfilled](state, action) {
            const note = action.payload.note;

            state.notes = state.notes.map((el) => {
                if (el.note_id === note.note_id) {
                    return note;
                }
                return el;
            });

            state.pendingNoteId = null;
        },

        [editNote.rejected](state) {
            state.pendingNoteId = null;
        },

        [createNote.pending](state) {
            state.pendingCreate = true;
        },

        [createNote.fulfilled](state, action) {
            const { note } = action.payload;

            state.notes.unshift(note);

            state.pendingCreate = false;
        },

        [createNote.rejected](state) {
            state.pendingCreate = false;
        },
    },
});

export const { setSearch, unselectNote, switchDialogOpen } = noteSlice.actions;

export default noteSlice.reducer;
