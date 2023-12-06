import { useDispatch, useSelector } from "react-redux";

import { LoadingContainer } from "./LoadingContainer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { getUserInfo } from "../../store/actions/user.js";
import { all } from "../../lib/lib.js";

export function BaseRoute() {
    const dispatch = useDispatch();
    const { getUserInfoErrorCode, getUserInfoPending, userInfo } = useSelector(
        (state) => state.user
    );
    const APIErrorsList = useSelector((state) => state.APIErrors.APIErrors);

    useEffect(() => {
        if (all(Object.values(userInfo), (el) => el === null)) {
            dispatch(getUserInfo());
        }
    }, [userInfo]);

    return getUserInfoErrorCode === "ERR_NETWORK" ||
        getUserInfoPending ||
        getUserInfoPending === null ? (
        <LoadingContainer
            errorText={APIErrorsList.length ? APIErrorsList[0] : null}
            isLoading={getUserInfoPending}
        ></LoadingContainer>
    ) : (
        <Outlet></Outlet>
    );

    // return <Outlet></Outlet>;
}
