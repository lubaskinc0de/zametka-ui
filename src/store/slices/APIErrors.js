import { createSlice } from "@reduxjs/toolkit";

/**
 * Parse api errors to flat list of strings
 * @param {Object} state
 */
export const parseErrors = (error) => {
    console.error(error);

    if (error.code === "ERR_NETWORK") {
        return [
            "Похоже, что сервер сейчас недоступен. Повторите попытку позже.",
        ];
    } else if (error.response && error.response.status === 401) {
        return [];
    } else if (error.code === "ERR_BAD_REQUEST") {
        if (error.response.data.details) {
            return [error.response.data.details];
        }
        // many validation errors case

        if (error.response.data.message) {
            return [error.response.data.message];
        }

        if (error.response.data.detail) {
            return Array.isArray(error.response.data.detail)
                ? response.data.detail.map((val) => val.msg)
                : [error.response.data.detail];
        }
    }

    console.error(
        "АХТУНГ!! АХТУНГ!! СВИСТАТЬ ВСЕХ НАВЕРХ У НАС ТУТ ОШИБКА ПИЗДЕЦ ПРОСТО"
    );
    console.error(error);
};

const APIErrorsSlice = createSlice({
    name: "APIErrorsSlice",
    initialState: {
        APIErrors: [],
    },
    reducers: {
        /**
         * Set APIErrors
         * @param {Object} state
         * @param {Object} action
         */
        setAPIErrors(state, action) {
            state.APIErrors = action.payload.APIErrors;
        },

        /**
         * Remove first element from APIErrors
         * @param {Object} state
         */
        shiftAPIErrors(state) {
            state.APIErrors.shift();
        },

        /**
         * Set APIErrors state to the []
         * @param {Object} state
         */
        clearAPIErrors(state) {
            state.APIErrors = [];
        },
    },
});

export const { setAPIErrors, shiftAPIErrors, clearAPIErrors } =
    APIErrorsSlice.actions;

export default APIErrorsSlice.reducer;
