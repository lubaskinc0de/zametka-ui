import { EmailVerification as EmailVerificationComponent } from "../../components/auth/emailVerification/EmailVerification.jsx";

import queryString from "query-string";

export function EmailVerification() {
    const urlParams = queryString.parse(location.search);
    const token = urlParams.token;

    return (
        <EmailVerificationComponent
            url_token={token}
        ></EmailVerificationComponent>
    );
}
