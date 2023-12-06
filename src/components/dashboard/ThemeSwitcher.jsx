import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ColorMode, setTheme } from "../../store/slices/globalSettings.js";

export function ThemeSwitcher() {
    const { theme: colorMode } = useSelector((state) => state.globalSettings);
    const dispatch = useDispatch();

    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
                dispatch(
                    setTheme(
                        colorMode === ColorMode.DARK
                            ? ColorMode.LIGHT
                            : ColorMode.DARK
                    )
                );
            }}
            color="inherit"
        >
            {colorMode === ColorMode.DARK ? (
                <Brightness7Icon></Brightness7Icon>
            ) : (
                <Brightness4Icon></Brightness4Icon>
            )}
        </IconButton>
    );
}
