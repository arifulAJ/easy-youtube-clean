import { PlayCircleOutline } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

import { useStoreActions, useStoreState } from "easy-peasy";
import FavoriteComponent from "../favorite";

const PlaylistCardItem = ({
  playListThumbnail,
  playListTitle,
  channelTitle,
  playlistId,
  item,
}) => {
  const { addToFavorite, removeToFavorite } = useStoreActions(
    (state) => state.favorites
  );
  const favoritePlaylists = useStoreState((state) => state.favorites.items);
  const isFavorite = favoritePlaylists.some(
    (item) => item.playlistId === playlistId
  );

  const handelFavoriteItems = () => {
    if (isFavorite) {
      removeToFavorite(item.playlistId);
    } else {
      addToFavorite(item);
    }
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          boxShadow: " 5px 6px 8px #e0d3d3",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={playListThumbnail?.url}
          alt={channelTitle}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {playListTitle}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            variant="body2"
            fontWeight={600}
            color="#020202e8"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
              src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=2000"
              alt="image"
            />{" "}
            {channelTitle}
          </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }}></Box>
        <CardActions sx={{ marginTop: "-10px" }}>
          <Button to={`/playlistPlayer/${playlistId}`} component={Link}>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <PlayCircleOutline />
              <Typography fontWeight={"600"} variant="body2">
                Start Tutorial
              </Typography>
            </Stack>
          </Button>

          <Button onClick={handelFavoriteItems}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PlaylistCardItem;
