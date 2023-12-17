import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { UserInfo } from "./user/UserInfo.jsx";
import { SearchNote } from "./SearchNote.jsx";
import { NoteList } from "./note/NoteList.jsx";

export function FunctionalPanel({ border, sectionBorder }) {
    return (
        <Grid xs={12} sm={3}>
            <Box
                height="100%"
                sx={{
                    ...border,
                    borderLeft: 0,
                    borderTop: 0,
                    borderBottom: 0,
                }}
            >
                <Grid direction="row" container spacing={0} height="100%">
                    <Grid
                        height="20%"
                        sx={{
                            ...border,
                            ...sectionBorder,
                        }}
                        xs={12}
                        pl={2}
                        pt={2}
                    >
                        <Stack spacing={2}>
                            <UserInfo></UserInfo>
                            <SearchNote></SearchNote>
                        </Stack>
                    </Grid>
                    <Grid
                        height="80vh"
                        sx={{
                            ...border,
                            ...sectionBorder,
                            borderBottom: 0,
                        }}
                        xs={12}
                    >
                        <NoteList></NoteList>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}
