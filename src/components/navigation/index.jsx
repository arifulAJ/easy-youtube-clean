import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";
import DrawerComponent from "./drawer";
import ModalPlaylist from "../modal";
import { Outlet, Link as RouterLink } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CustomizedButton, CustomizedLink } from "../../utils/styleComponent";

const PAGES = ["playlistItems", "support"];

const NavigationBar = () => {
  const them = useTheme();

  const isMatch = useMediaQuery(them.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#141313" }}>
        <Toolbar>
          <Link
            to="/"
            component={RouterLink}
            color={"inherit"}
            underline="hover"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <YouTubeIcon />
              <Typography>Clean youtube</Typography>
            </IconButton>
          </Link>
          {isMatch ? (
            <DrawerComponent handleClickOpen={handleClickOpen} />
          ) : (
            <>
              <ThemeProvider theme={theme}>
                <Typography sx={{ marginRight: "10px" }}>
                  <CustomizedLink
                    underline="none"
                    component={RouterLink}
                    color={"inherit"}
                    to="/playlistItems"
                  >
                    PlaylistItems
                  </CustomizedLink>
                </Typography>
                <Typography sx={{ marginRight: "10px" }}>
                  <CustomizedLink
                    underline="none"
                    component={RouterLink}
                    color={"inherit"}
                    to="/favorite"
                  >
                    Favorite
                  </CustomizedLink>
                </Typography>
                <Typography sx={{ marginRight: "10px" }}>
                  <CustomizedLink
                    underline="none"
                    component={RouterLink}
                    color={"inherit"}
                    to="/recent"
                  >
                    Recent
                  </CustomizedLink>
                </Typography>
              </ThemeProvider>

              <CustomizedButton
                sx={{ marginLeft: "auto", color: "white" }}
                variant="outlined"
                onClick={handleClickOpen}
              >
                add PlaylistId
              </CustomizedButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <ModalPlaylist handleClose={handleClose} open={open} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default NavigationBar;
