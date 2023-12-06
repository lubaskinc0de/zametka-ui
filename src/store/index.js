import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user.js";
import noteSlice from "./slices/note.js";

import APIErrorsSlice from "./slices/APIErrors";
import globalSettingsSlice from "./slices/globalSettings.js";

export default configureStore({
    reducer: {
        user: userSlice,
        notes: noteSlice,
        APIErrors: APIErrorsSlice,
        globalSettings: globalSettingsSlice,
    },
});
