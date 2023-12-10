import axios from "axios";
import Cookies from "universal-cookie";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

/**
 * API for the dashboard part
 */
export class NoteAPI {
    static notesEndpoint = baseUrl + "/notes/";

    static getNotes(urlParameters) {
        return axios.get(`${this.notesEndpoint}?${urlParameters}`, {
            withCredentials: true,
        });
    }

    static getNote(noteId) {
        return axios.get(`${this.notesEndpoint}${noteId}`, {
            withCredentials: true,
        });
    }

    static deleteNote(noteId) {
        return axios.delete(`${this.notesEndpoint}${noteId}`, {
            headers: {
                "X-CSRF-Token": new Cookies().get("csrf_access_token"),
            },
            withCredentials: true,
        });
    }

    static editNote(noteId, data) {
        return axios.put(`${this.notesEndpoint}${noteId}`, data, {
            headers: {
                "X-CSRF-Token": new Cookies().get("csrf_access_token"),
            },
            withCredentials: true,
        });
    }

    static createNote(data) {
        return axios.post(this.notesEndpoint, data, {
            headers: {
                "X-CSRF-Token": new Cookies().get("csrf_access_token"),
            },
            withCredentials: true,
        });
    }
}
