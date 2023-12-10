import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { LoadingContainer } from "./LoadingContainer.jsx";
import { useEffect } from "react";

const AUTHORIZED_REDIRECT = "/";

export function AnonymousProtectedRoute() {
    const navigate = useNavigate();

    const { userInfo, getUserInfoPending } = useSelector((state) => state.user);

    useEffect(() => {
        if (userInfo.firstName && !getUserInfoPending) {
            navigate(AUTHORIZED_REDIRECT);
        }
    }, []);

    return userInfo.firstName !== null ||
        getUserInfoPending ||
        getUserInfoPending === null ? (
        <LoadingContainer isLoading></LoadingContainer>
    ) : (
        <Outlet></Outlet>
    );
}
