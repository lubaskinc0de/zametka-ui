import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

/**
 * API for the authentication part
 */
export class AuthAPI {
    static registerEndpoint = baseUrl + "/user/sign-up";
    static loginEndpoint = baseUrl + "/user/sign-in";
    static emailVerificationEndpoint = baseUrl + "/user/verify/";
    static whoamiEndpoint = baseUrl + "/user/whoami/";

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
