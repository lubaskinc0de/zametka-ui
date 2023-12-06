import { Outlet, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { LoadingContainer } from "./LoadingContainer.jsx";
import { useEffect } from "react";

const UNAUTHORIZED_REDIRECT = "/signin";

export function AuthProtectedRoute() {
    const navigate = useNavigate();

    const { getUserInfoErrorCode } = useSelector((state) => state.user);

    useEffect(() => {
        if (getUserInfoErrorCode === 401) {
            navigate(UNAUTHORIZED_REDIRECT);
        }
    }, []);

    return getUserInfoErrorCode === 401 ? (
        <LoadingContainer isLoading></LoadingContainer>
    ) : (
        <Outlet></Outlet>
    );

    // return <Outlet></Outlet>;
}
