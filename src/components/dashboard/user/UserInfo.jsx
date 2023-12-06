import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import { UserName } from "./UserName.jsx";
import { UserJoinedDate } from "./UserJoinedDate.jsx";
import { useSelector } from "react-redux";
import { ThemeSwitcher } from "../ThemeSwitcher.jsx";

export function UserInfo({ border }) {
    const { userInfo } = useSelector((state) => state.user);

    return (
        <Box height="100%" sx={{ ...border, borderLeft: 0 }}>
            <Stack alignItems="center" direction="row" spacing={1.5}>
                <Avatar sx={{ width: 40, height: 40 }}>
                    {userInfo.firstName ? userInfo.firstName.charAt(0) : ""}
                </Avatar>
                <Stack spacing={0}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <UserName
                            value={`${userInfo.firstName} ${userInfo.lastName}`}
                        ></UserName>
                        <ThemeSwitcher></ThemeSwitcher>
                    </Stack>
                    <UserJoinedDate value={userInfo.joinedAt}></UserJoinedDate>
                </Stack>
            </Stack>
        </Box>
    );
}
