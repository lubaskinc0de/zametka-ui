import axios from "axios";

const baseUrl = import.meta.env.VITE_USERS_URL;
const notesUrl = import.meta.env.VITE_NOTES_URL;

/**
 * API for the authentication part
 */
export class AuthAPI {
    static registerEndpoint = baseUrl + "/";
    static loginEndpoint = baseUrl + "/authorize";
    static emailVerificationEndpoint = baseUrl + "/verify/";
    static whoamiEndpoint = notesUrl + "/users/me";

    static register(data) {
        return axios.post(this.registerEndpoint, data);
    }

    static login(data) {
        return axios.post(this.loginEndpoint, data, {
            withCredentials: true,
        });
    }

    static emailVerification(token) {
        return axios.get(`${this.emailVerificationEndpoint}${token}`);
    }

    static whoami() {
        return axios.get(this.whoamiEndpoint, {
            withCredentials: true,
        });
    }
}
