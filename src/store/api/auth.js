import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

/**
 * API for the authentication part
 */
export class AuthAPI {
    static registerEndpoint = baseUrl + "/auth/sign-up";
    static loginEndpoint = baseUrl + "/auth/sign-in";
    static emailVerificationEndpoint = baseUrl + "/auth/verify/";
    static whoamiEndpoint = baseUrl + "/auth/whoami/";

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
