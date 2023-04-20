import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import getPlaylist from "../../api";
import { Box, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CustomizedButton } from "../../utils/styleComponent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StackPlayList from "./stackPlayList";
const PlaylistPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id } = useParams();
  const playlist = useStoreState((state) => state.playlists.data[id]);
  const addPlaylist = useStoreActions(
    (actions) => actions.playlists.addPlaylist
  );

  useEffect(() => {
    getPlaylist(id).then((data) => addPlaylist(data));
  }, [id, addPlaylist]);

  //video id
  const videoId = playlist.content;
  const vId = videoId.map((i) => i.videoId);

  function onPlayerReady(e) {
    e.target.pauseVideo();
  }
  function selectVideo(index) {
    setCurrentIndex(index);
    console.log(index);
  }

  // stack video
  const onVideoSelect = (video) => {
    e.target.value(video);
    setCurrentIndex(video);
    console.log(video);
  };
  const handleClick = (item) => {
    // Do something when the item is clicked
    setCurrentIndex(item);
    console.log(item);
  };
  // useMediaQua
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const height = matchesSm
    ? "200px"
    : matchesMd
    ? "300px"
    : matchesLg
    ? "400px"
    : "400px";

  // responsive text
  let themes = createTheme();
  themes = responsiveFontSizes(theme);
  const rightBar = playlist.playlistItems;
  console.log(currentIndex);
  return (
    <>
      <Box sx={{ paddingTop: "64px" }}>
        <ThemeProvider theme={themes}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={8}>
              <Box>
                <Box
                  sx={{
                    height: height,
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: 450,
                      lg: 800,
                    },
                    position: "relative",
                  }}
                >
                  <YouTube
                    videoId={currentIndex ? currentIndex : vId[currentIndex]}
                    onReady={onPlayerReady}
                    opts={{
                      width: "100%",
                      height: height,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <CustomizedButton
                    sx={{ color: "black", padding: 0 }}
                    variant="outlined"
                    disabled={currentIndex === 0}
                    onClick={() => selectVideo(currentIndex - 1)}
                  >
                    {" "}
                    <ArrowBackIosNewIcon /> prev
                  </CustomizedButton>
                  <CustomizedButton
                    sx={{ color: "black", padding: 0 }}
                    variant="outlined"
                    disabled={currentIndex == videoId.length - 1}
                    onClick={() => selectVideo(currentIndex + 1)}
                  >
                    next
                    <ArrowForwardIosIcon />
                  </CustomizedButton>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={12} md={4} lg={4}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: 400,
                    lg: 400,
                  },
                }}
              >
                <h1>Fetch all playlist video </h1>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {rightBar.map((item, index) => (
                    <StackPlayList
                      onVideoSelect={handleClick}
                      vid={vId}
                      index={index}
                      currentIndex={currentIndex}
                      item={item}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default PlaylistPlayer;
