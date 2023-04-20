import { Box, Drawer, IconButton, List, Typography } from "@mui/material";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CustomizedButton,
  CustomizedLink,
} from "../../../utils/styleComponent";

const DrawerComponent = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClick={() => setOpenDrawer(false)}>
        <Box sx={{ background: "black", height: "100%" }}>
          <List sx={{ paddingTop: "30px" }}>
            <ThemeProvider theme={theme}>
              <Typography>
                <CustomizedLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                  variant="body"
                  underline="none"
                  component={RouterLink}
                  color={"white"}
                  to="/"
                >
                  <HomeIcon /> Home
                </CustomizedLink>
              </Typography>
              <Typography>
                <CustomizedLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                  variant="body"
                  underline="none"
                  component={RouterLink}
                  color={"white"}
                  to="/playlistItems"
                >
                  <QueueMusicIcon /> Playlist
                </CustomizedLink>
              </Typography>
              <Typography>
                <CustomizedLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                  variant="body"
                  underline="none"
                  component={RouterLink}
                  color={"white"}
                  to="/favorite"
                >
                  <FavoriteIcon /> Favorite
                </CustomizedLink>
              </Typography>

              <Typography>
                <CustomizedLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                  variant="body"
                  underline="none"
                  component={RouterLink}
                  color={"white"}
                  to="/recent"
                >
                  <RecentActorsIcon /> Recent
                </CustomizedLink>
              </Typography>
            </ThemeProvider>

            <CustomizedButton
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              variant="text"
              onClick={handleClickOpen}
            >
              <PlaylistAddIcon /> Add playlist
            </CustomizedButton>
            {/* <CustomizedTypography>this very much</CustomizedTypography> */}
          </List>
        </Box>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerComponent;
